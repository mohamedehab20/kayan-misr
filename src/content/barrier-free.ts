// "A Barrier-Free Party" — page for people with disabilities (Arabic/English).
// Legal references are general awareness content; review with a legal specialist before publishing.

type Text = { ar: string; en: string };

export const intro = {
  eyebrow: { ar: "ذوو الهمم في قلب العمل العام", en: "People with disabilities at the heart of public life" },
  title: { ar: "المشاركة حق للجميع، بلا حواجز", en: "Participation is everyone's right — without barriers" },
  text: {
    ar: "نؤمن أن ذوي الهمم شركاء كاملون في بناء الوطن. لذلك نعمل على إزالة كل الحواجز التي تمنع مشاركتهم: حواجز المكان، والمعلومة، والفرصة.",
    en: "We believe people with disabilities are full partners in building the nation, so we work to remove every barrier to their participation: barriers of place, of information, and of opportunity.",
  },
  pillars: [
    { icon: "accessibility", title: { ar: "حواجز المكان", en: "Physical barriers" }, text: { ar: "مقرات وفعاليات متاحة للكراسي المتحركة.", en: "Wheelchair-accessible offices and events." } },
    { icon: "ear", title: { ar: "حواجز المعلومة", en: "Information barriers" }, text: { ar: "لغة إشارة، وطباعة برايل، ومحتوى سهل القراءة.", en: "Sign language, Braille and easy-read content." } },
    { icon: "briefcase", title: { ar: "حواجز الفرصة", en: "Opportunity barriers" }, text: { ar: "تمثيل في الهياكل الحزبية وفرص تدريب وعمل.", en: "Representation in party bodies, plus training and jobs." } },
  ],
};

export const rights = {
  title: { ar: "حقوقك يكفلها الدستور والقانون", en: "Your rights under the constitution and the law" },
  subtitle: {
    ar: "إطار قانوني يضمن المساواة وتكافؤ الفرص والدمج الكامل في المجتمع.",
    en: "A legal framework that guarantees equality, equal opportunity and full inclusion in society.",
  },
  items: [
    {
      ref: { ar: "الدستور — المادة 81", en: "Constitution — Article 81" },
      text: {
        ar: "تلتزم الدولة بضمان حقوق الأشخاص ذوي الإعاقة والأقزام صحيًا واقتصاديًا واجتماعيًا وثقافيًا وترفيهيًا ورياضيًا وتعليميًا، وتهيئة المرافق العامة والبيئة المحيطة بهم.",
        en: "The state guarantees the health, economic, social, cultural, recreational, sporting and educational rights of persons with disabilities and dwarfs, and adapts public facilities and their surroundings.",
      },
    },
    {
      ref: { ar: "الدستور — المادة 244", en: "Constitution — Article 244" },
      text: {
        ar: "تعمل الدولة على تمثيل الأشخاص ذوي الإعاقة تمثيلًا ملائمًا في مجلس النواب.",
        en: "The state works to ensure appropriate representation of persons with disabilities in the House of Representatives.",
      },
    },
    {
      ref: { ar: "قانون حقوق الأشخاص ذوي الإعاقة رقم 10 لسنة 2018", en: "Law No. 10 of 2018 on the Rights of Persons with Disabilities" },
      text: {
        ar: "ينظم حقوق التعليم والصحة والعمل والإتاحة، ويلزم جهات العمل بتخصيص 5% من الوظائف للأشخاص ذوي الإعاقة.",
        en: "Regulates rights to education, health, work and accessibility, and requires employers to reserve 5% of jobs for persons with disabilities.",
      },
    },
    {
      ref: { ar: "المجلس القومي للأشخاص ذوي الإعاقة", en: "National Council for Persons with Disabilities" },
      text: {
        ar: "الجهة الوطنية المختصة بمتابعة تنفيذ حقوق الأشخاص ذوي الإعاقة واقتراح السياسات الخاصة بهم.",
        en: "The national body that follows up on the rights of persons with disabilities and proposes policies for them.",
      },
    },
  ],
};

export const programs: { icon: string; title: Text; text: Text }[] = [
  {
    icon: "vote",
    title: { ar: "التمكين السياسي", en: "Political empowerment" },
    text: {
      ar: "برامج تدريب على المشاركة السياسية والترشح، ودعم أعضاء الحزب من ذوي الهمم الراغبين في خوض الانتخابات.",
      en: "Training in political participation and running for office, and support for members with disabilities who want to stand in elections.",
    },
  },
  {
    icon: "users",
    title: { ar: "لجنة ذوي الهمم بالحزب", en: "The party's disability committee" },
    text: {
      ar: "لجنة نوعية يقودها أعضاء من ذوي الهمم، تشارك في صنع قرارات الحزب وتراجع سياساته من منظور الإتاحة.",
      en: "A committee led by members with disabilities that takes part in party decisions and reviews its policies for accessibility.",
    },
  },
  {
    icon: "ear",
    title: { ar: "فعاليات متاحة للجميع", en: "Events open to everyone" },
    text: {
      ar: "ترجمة بلغة الإشارة، وأماكن مهيأة للكراسي المتحركة، ومطبوعات بطريقة برايل وبخط كبير في فعالياتنا.",
      en: "Sign-language interpretation, wheelchair-accessible venues, and Braille and large-print materials at our events.",
    },
  },
  {
    icon: "scale",
    title: { ar: "الدعم القانوني", en: "Legal support" },
    text: {
      ar: "توعية بالحقوق، ومساعدة في إجراءات بطاقة الخدمات المتكاملة، والتوجيه في الشكاوى المتعلقة بالإتاحة والتوظيف.",
      en: "Rights awareness, help with the integrated services card procedures, and guidance on accessibility and employment complaints.",
    },
  },
  {
    icon: "briefcase",
    title: { ar: "التدريب والتوظيف", en: "Training and employment" },
    text: {
      ar: "تدريب مهني وربط بجهات العمل في إطار نسبة الـ5% المقررة قانونًا، ودعم المشروعات الصغيرة.",
      en: "Vocational training, links to employers within the legal 5% quota, and support for small businesses.",
    },
  },
  {
    icon: "trophy",
    title: { ar: "الرياضة والفنون", en: "Sports and the arts" },
    text: {
      ar: "دمج ذوي الهمم في الأنشطة الرياضية والفنية والثقافية للحزب، وإبراز المواهب والإنجازات.",
      en: "Including people with disabilities in the party's sports, arts and cultural activities, and showcasing their talents.",
    },
  },
];

export const guide = {
  title: { ar: "دليلك العملي", en: "Your practical guide" },
  steps: [
    {
      title: { ar: "بطاقة الخدمات المتكاملة", en: "The integrated services card" },
      text: {
        ar: "البطاقة الرسمية التي تثبت الإعاقة وتتيح الحصول على المزايا والخدمات المقررة قانونًا، وتُستخرج من خلال وزارة التضامن الاجتماعي.",
        en: "The official card that certifies a disability and gives access to the benefits and services set by law, issued through the Ministry of Social Solidarity.",
      },
    },
    {
      title: { ar: "التصويت بسهولة", en: "Voting with ease" },
      text: {
        ar: "من حقك أن تُدلي بصوتك في لجنة يسهل الوصول إليها، وأن تطلب المساعدة اللازمة للتصويت وفق ضوابط الهيئة الوطنية للانتخابات.",
        en: "You have the right to vote at an accessible polling station and to request the help you need, under the National Election Authority's rules.",
      },
    },
    {
      title: { ar: "انضم إلينا", en: "Join us" },
      text: {
        ar: "سجّل بياناتك ونوع الدعم الذي تحتاجه، وسيتواصل معك فريق «حزب بلا حواجز» لإشراكك في البرامج واللجنة.",
        en: "Register your details and the support you need, and the Barrier-Free team will contact you to join the programs and the committee.",
      },
    },
  ],
};

export const labels = {
  programsTitle: { ar: "برامجنا", en: "Our programs" },
  programsSubtitle: {
    ar: "خطوات عملية لتكون مشاركة ذوي الهمم حقيقية وليست شكلية.",
    en: "Practical steps to make the participation of people with disabilities real, not symbolic.",
  },
  join: { ar: "انضم إلى «حزب بلا حواجز»", en: "Join the Barrier-Free Party" },
  note: {
    ar: "معلومات توعوية عامة؛ راجع المجلس القومي للأشخاص ذوي الإعاقة ووزارة التضامن الاجتماعي للتفاصيل المحدّثة.",
    en: "General awareness information; check the National Council for Persons with Disabilities and the Ministry of Social Solidarity for up-to-date details.",
  },
  tools: {
    title: { ar: "أدوات الإتاحة", en: "Accessibility tools" },
    hint: { ar: "تنطبق على كل صفحات الموقع أثناء تصفحك.", en: "They apply to every page while you browse." },
    bigger: { ar: "تكبير الخط", en: "Larger text" },
    smaller: { ar: "تصغير الخط", en: "Smaller text" },
    contrast: { ar: "تباين عالٍ", en: "High contrast" },
    reset: { ar: "إعادة الضبط", en: "Reset" },
  },
};
