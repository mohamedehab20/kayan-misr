-- Kayan Misr: members portal + form submissions
-- Run once in Supabase: Dashboard → SQL Editor → paste → Run

-- ───────────── Member profiles ─────────────
create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text not null default '' check (char_length(full_name) <= 120),
  phone text check (char_length(phone) <= 30),
  governorate text check (char_length(governorate) <= 60),
  membership_status text not null default 'pending'
    check (membership_status in ('pending', 'active', 'rejected')),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Members read their own profile"
  on public.profiles for select to authenticated
  using ((select auth.uid()) = id);

create policy "Members update their own profile"
  on public.profiles for update to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

-- Members may edit their details, but never their membership status
revoke update on public.profiles from authenticated;
grant update (full_name, phone, governorate) on public.profiles to authenticated;

-- Create a profile automatically for every new sign-up
create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, phone, governorate)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    new.raw_user_meta_data ->> 'phone',
    new.raw_user_meta_data ->> 'governorate'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ───────────── Form submissions ─────────────
create table public.submissions (
  id bigint generated always as identity primary key,
  type text not null
    check (type in ('contact', 'membership', 'academy', 'event', 'entertainment', 'dialogue')),
  name text not null check (char_length(name) between 2 and 120),
  email text not null check (char_length(email) <= 200),
  phone text check (char_length(phone) <= 30),
  topic text check (char_length(topic) <= 200),
  message text not null check (char_length(message) between 5 and 5000),
  locale text not null default 'ar' check (locale in ('ar', 'en')),
  user_id uuid default auth.uid() references auth.users on delete set null,
  status text not null default 'new' check (status in ('new', 'in_review', 'done')),
  created_at timestamptz not null default now()
);

create index submissions_user_id_idx on public.submissions (user_id);
create index submissions_type_created_idx on public.submissions (type, created_at desc);

alter table public.submissions enable row level security;

-- Visitors and members can send requests; a member can only attach their own id
create policy "Anyone can submit a request"
  on public.submissions for insert to anon, authenticated
  with check (status = 'new' and (user_id is null or user_id = (select auth.uid())));

-- Members see their own requests in the portal (staff use the Supabase dashboard)
create policy "Members read their own requests"
  on public.submissions for select to authenticated
  using (user_id = (select auth.uid()));
