// Egypt's political life — officials, parties and governors.
// Accurate as of the February 2026 cabinet and governors reshuffles (culture post updated July 2026).
// Office-holders change: re-check the sources listed in `sources` before each update.

type Text = { ar: string; en: string };

export const asOf: Text = { ar: "فبراير 2026 (مع تحديث يوليو 2026)", en: "February 2026 (updated July 2026)" };

export const sources = [
  { label: "الأهرام — التشكيل الجديد لحكومة مدبولي (10 فبراير 2026)", url: "https://gate.ahram.org.eg/News/5527808.aspx" },
  { label: "Ahram Online — Madbouly's reshuffled cabinet", url: "https://english.ahram.org.eg/News/562168.aspx" },
  { label: "ويكيبيديا — وزارة مصطفى مدبولي الثانية", url: "https://ar.wikipedia.org/wiki/وزارة_مصطفى_مدبولي_الثانية" },
  { label: "مصراوي — تفاصيل حركة المحافظين الجديدة (16 فبراير 2026)", url: "https://www.masrawy.com/news/news_egypt/details/2026/2/16/2943592" },
  { label: "Ahram Online — 20 new governors sworn in", url: "https://english.ahram.org.eg/News/562477.aspx" },
  { label: "Wikipedia — 2025 Egyptian parliamentary election", url: "https://en.wikipedia.org/wiki/2025_Egyptian_parliamentary_election" },
];

export const president = {
  name: { ar: "عبد الفتاح السيسي", en: "Abdel Fattah El-Sisi" },
  since: "2014",
  term: { ar: "الولاية الحالية: 2024 – 2030", en: "Current term: 2024 – 2030" },
};

export const primeMinister = {
  name: { ar: "مصطفى مدبولي", en: "Mostafa Madbouly" },
  since: "2018",
  note: { ar: "ويتولى كذلك ملف الإصلاح الإداري", en: "Also in charge of administrative reform" },
};

export const deputyPrimeMinisters = [
  { role: { ar: "نائب رئيس الوزراء للشؤون الاقتصادية", en: "Deputy PM for Economic Affairs" }, name: { ar: "حسين عيسى", en: "Hussein Eissa" } },
];

export type Ministry = {
  ministry: Text;
  minister: Text;
  deputies?: string[];
  note?: Text;
};

export const ministries: Ministry[] = [
  { ministry: { ar: "الدفاع والإنتاج الحربي", en: "Defense and Military Production" }, minister: { ar: "أشرف سالم زاهر", en: "Ashraf Salem Zaher" } },
  { ministry: { ar: "الداخلية", en: "Interior" }, minister: { ar: "محمود توفيق", en: "Mahmoud Tawfik" } },
  {
    ministry: { ar: "الخارجية والتعاون الدولي والمصريين بالخارج", en: "Foreign Affairs, International Cooperation and Egyptian Expatriates" },
    minister: { ar: "بدر عبد العاطي", en: "Badr Abdelatty" },
    deputies: ["محمد أبو بكر (للشؤون الإفريقية)", "سمر محمود (للتعاون الدولي)"],
  },
  { ministry: { ar: "المالية", en: "Finance" }, minister: { ar: "أحمد كجوك", en: "Ahmed Kouchouk" } },
  { ministry: { ar: "العدل", en: "Justice" }, minister: { ar: "محمود حلمي الشريف", en: "Mahmoud Helmy El-Sherif" } },
  { ministry: { ar: "الصحة والسكان", en: "Health and Population" }, minister: { ar: "خالد عبد الغفار", en: "Khaled Abdel-Ghaffar" } },
  { ministry: { ar: "التربية والتعليم والتعليم الفني", en: "Education and Technical Education" }, minister: { ar: "محمد عبد اللطيف", en: "Mohamed Abdel-Latif" } },
  { ministry: { ar: "التعليم العالي والبحث العلمي", en: "Higher Education and Scientific Research" }, minister: { ar: "عبد العزيز قنصوة", en: "Abdel Aziz Konsowa" } },
  { ministry: { ar: "التخطيط", en: "Planning" }, minister: { ar: "أحمد رستم", en: "Ahmed Rostom" } },
  { ministry: { ar: "الاستثمار والتجارة الخارجية", en: "Investment and Foreign Trade" }, minister: { ar: "محمد فريد صالح", en: "Mohamed Farid Saleh" } },
  { ministry: { ar: "الصناعة", en: "Industry" }, minister: { ar: "خالد هاشم", en: "Khaled Hashem" } },
  { ministry: { ar: "النقل", en: "Transport" }, minister: { ar: "كامل الوزير", en: "Kamel El-Wazir" } },
  {
    ministry: { ar: "الإسكان والمرافق والمجتمعات العمرانية", en: "Housing, Utilities and Urban Communities" },
    minister: { ar: "راندة المنشاوي", en: "Randa El-Menshawy" },
    deputies: ["وليد عباس", "أحمد عمران (للمرافق)"],
  },
  { ministry: { ar: "التنمية المحلية والبيئة", en: "Local Development and Environment" }, minister: { ar: "منال عوض", en: "Manal Awad" } },
  { ministry: { ar: "الكهرباء والطاقة المتجددة", en: "Electricity and Renewable Energy" }, minister: { ar: "محمود عصمت", en: "Mahmoud Esmat" } },
  { ministry: { ar: "البترول والثروة المعدنية", en: "Petroleum and Mineral Resources" }, minister: { ar: "كريم بدوي", en: "Karim Badawi" } },
  { ministry: { ar: "الموارد المائية والري", en: "Water Resources and Irrigation" }, minister: { ar: "هاني سويلم", en: "Hany Sweilam" } },
  { ministry: { ar: "الزراعة واستصلاح الأراضي", en: "Agriculture and Land Reclamation" }, minister: { ar: "علاء الدين فاروق", en: "Alaa El-Din Farouk" } },
  { ministry: { ar: "التموين والتجارة الداخلية", en: "Supply and Internal Trade" }, minister: { ar: "شريف فاروق", en: "Sherif Farouk" } },
  { ministry: { ar: "التضامن الاجتماعي", en: "Social Solidarity" }, minister: { ar: "مايا مرسي", en: "Maya Morsi" } },
  { ministry: { ar: "العمل", en: "Labour" }, minister: { ar: "حسن رداد", en: "Hassan El-Radad" } },
  { ministry: { ar: "الاتصالات وتكنولوجيا المعلومات", en: "Communications and Information Technology" }, minister: { ar: "رأفت هندي", en: "Raafat Hindy" } },
  { ministry: { ar: "الطيران المدني", en: "Civil Aviation" }, minister: { ar: "سامح الحفني", en: "Sameh El-Hefny" } },
  { ministry: { ar: "السياحة والآثار", en: "Tourism and Antiquities" }, minister: { ar: "شريف فتحي", en: "Sherif Fathy" } },
  {
    ministry: { ar: "الثقافة", en: "Culture" },
    minister: { ar: "عبد العزيز قنصوة (بالوكالة)", en: "Abdel Aziz Konsowa (acting)" },
    note: { ar: "منذ قبول استقالة جيهان زكي في يوليو 2026", en: "Since Gihane Zaki's resignation was accepted in July 2026" },
  },
  { ministry: { ar: "الأوقاف", en: "Endowments" }, minister: { ar: "أسامة الأزهري", en: "Osama El-Azhari" } },
  { ministry: { ar: "الشباب والرياضة", en: "Youth and Sports" }, minister: { ar: "جوهر نبيل", en: "Gohar Nabil" } },
  { ministry: { ar: "الشؤون النيابية", en: "Parliamentary Affairs" }, minister: { ar: "هاني عازر", en: "Hany Azer" } },
  { ministry: { ar: "الدولة للإعلام", en: "State for Information" }, minister: { ar: "ضياء رشوان", en: "Diaa Rashwan" } },
  { ministry: { ar: "الدولة للإنتاج الحربي", en: "State for Military Production" }, minister: { ar: "صلاح سليمان", en: "Salah Soliman" } },
];

// House of Representatives after the 2025 elections (results announced January 2026). 596 seats in total.
export const houseTotal = 596;
export const parties = [
  { name: { ar: "مستقبل وطن", en: "Nation's Future" }, founded: "2014", seats: 231, about: { ar: "حزب الأغلبية في البرلمان منذ انتخابات 2020.", en: "The majority party in parliament since the 2020 elections." } },
  { name: { ar: "حماة الوطن", en: "Homeland Defenders" }, founded: "2013", seats: 91, about: { ar: "تأسس بعد 2013، وصار ثاني أكبر كتلة برلمانية.", en: "Founded after 2013; now the second-largest bloc." } },
  { name: { ar: "الجبهة الوطنية", en: "National Front" }, founded: "2024", seats: 70, about: { ar: "تأسس في ديسمبر 2024 ويرأسه عاصم الجزار، وخاض الانتخابات لأول مرة في 2025.", en: "Founded December 2024, chaired by Assem El-Gazzar; first election in 2025." } },
  { name: { ar: "الشعب الجمهوري", en: "Republican People's" }, founded: "2012", seats: 28, about: { ar: "حزب ليبرالي تأسس بعد ثورة يناير.", en: "A liberal party founded after the January revolution." } },
  { name: { ar: "المصري الديمقراطي الاجتماعي", en: "Egyptian Social Democratic" }, founded: "2011", seats: 12, about: { ar: "حزب يسار الوسط تأسس عقب ثورة يناير 2011.", en: "A centre-left party founded after the January 2011 revolution." } },
  { name: { ar: "الوفد", en: "Wafd" }, founded: "1919", seats: 12, about: { ar: "أعرق الأحزاب المصرية، نشأ مع ثورة 1919 بقيادة سعد زغلول، وأُعيد تأسيسه عام 1978 باسم الوفد الجديد.", en: "Egypt's oldest party, born with the 1919 revolution under Saad Zaghloul; re-founded in 1978 as the New Wafd." } },
  { name: { ar: "العدل", en: "Justice" }, founded: "2011", seats: 11, about: { ar: "حزب وسطي تأسس بعد ثورة يناير.", en: "A centrist party founded after the January revolution." } },
  { name: { ar: "الإصلاح والتنمية", en: "Reform and Development" }, founded: "2011", seats: 11, about: { ar: "حزب ليبرالي حصل على ترخيصه عام 2011.", en: "A liberal party licensed in 2011." } },
  { name: { ar: "النور", en: "Al-Nour" }, founded: "2011", seats: 6, about: { ar: "حزب ذو مرجعية سلفية تأسس بعد ثورة يناير.", en: "A Salafist-rooted party founded after the January revolution." } },
  { name: { ar: "التجمع الوطني التقدمي الوحدوي", en: "Tagammu (National Progressive Unionist)" }, founded: "1976", seats: 5, about: { ar: "من أقدم أحزاب اليسار، تأسس مع عودة التعددية الحزبية عام 1976.", en: "One of the oldest leftist parties, founded when multi-party politics returned in 1976." } },
  { name: { ar: "المؤتمر", en: "Congress" }, founded: "2012", seats: 4, about: { ar: "تأسس عام 2012 بمبادرة من عمرو موسى.", en: "Founded in 2012 on Amr Moussa's initiative." } },
  { name: { ar: "الحرية المصري", en: "Egyptian Freedom" }, founded: "2011", seats: 2, about: { ar: "حزب ليبرالي تأسس عام 2011.", en: "A liberal party founded in 2011." } },
  { name: { ar: "إرادة جيل", en: "Eradet Geel" }, founded: "—", seats: 2, about: { ar: "", en: "" } },
  { name: { ar: "الوعي", en: "Consciousness" }, founded: "—", seats: 1, about: { ar: "", en: "" } },
  { name: { ar: "المحافظين", en: "Conservative" }, founded: "—", seats: 1, about: { ar: "", en: "" } },
];
export const independents = 109;

export type Region = { name: Text; governorates: { name: Text; governor: Text; deputies?: string[]; renewed: boolean }[] };

// renewed = appointed or moved in the February 2026 reshuffle
export const regions: Region[] = [
  {
    name: { ar: "القاهرة الكبرى", en: "Greater Cairo" },
    governorates: [
      { name: { ar: "القاهرة", en: "Cairo" }, governor: { ar: "إبراهيم صابر", en: "Ibrahim Saber" }, deputies: ["أحمد أنور عطية العدل", "عمر محمود الشافعي الأكرت"], renewed: false },
      { name: { ar: "الجيزة", en: "Giza" }, governor: { ar: "أحمد عبد الله الأنصاري", en: "Ahmed El-Ansari" }, renewed: true },
      { name: { ar: "القليوبية", en: "Qalyubia" }, governor: { ar: "حسام الدين أحمد عبد الفتاح", en: "Hossam El-Din Abdel-Fattah" }, renewed: true },
    ],
  },
  {
    name: { ar: "الإسكندرية والدلتا", en: "Alexandria and the Delta" },
    governorates: [
      { name: { ar: "الإسكندرية", en: "Alexandria" }, governor: { ar: "أيمن محمد عطية", en: "Ayman Attia" }, deputies: ["أميرة يسن محمد هيكل"], renewed: true },
      { name: { ar: "البحيرة", en: "Beheira" }, governor: { ar: "جاكلين عازر", en: "Jacqueline Azer" }, deputies: ["شادي يحيى عبد العظيم المشد"], renewed: false },
      { name: { ar: "كفر الشيخ", en: "Kafr El-Sheikh" }, governor: { ar: "إبراهيم عبد القادر مكي محجوب", en: "Ibrahim Makki Mahgoub" }, renewed: true },
      { name: { ar: "الغربية", en: "Gharbia" }, governor: { ar: "علاء إبراهيم عبد المعطي", en: "Alaa Abdel-Moaty" }, deputies: ["حسام الدين عبده محمد"], renewed: true },
      { name: { ar: "المنوفية", en: "Monufia" }, governor: { ar: "عمرو محمد الغريب", en: "Amr El-Gharib" }, renewed: true },
      { name: { ar: "الدقهلية", en: "Dakahlia" }, governor: { ar: "طارق مرزوق", en: "Tarek Marzouk" }, deputies: ["حسين محمد مغربي سلامة"], renewed: false },
      { name: { ar: "دمياط", en: "Damietta" }, governor: { ar: "حسام الدين فوزي أبو سيف", en: "Hossam El-Din Abu Seif" }, deputies: ["محمد فوزي حسن عبد الرحيم"], renewed: true },
      { name: { ar: "الشرقية", en: "Sharqia" }, governor: { ar: "حازم الأشموني", en: "Hazem El-Ashmouni" }, renewed: false },
    ],
  },
  {
    name: { ar: "القناة وسيناء", en: "Canal and Sinai" },
    governorates: [
      { name: { ar: "بورسعيد", en: "Port Said" }, governor: { ar: "إبراهيم أبو ليمون", en: "Ibrahim Abu Limon" }, renewed: true },
      { name: { ar: "الإسماعيلية", en: "Ismailia" }, governor: { ar: "نبيل محمد حسب الله", en: "Nabil Hasaballah" }, renewed: true },
      { name: { ar: "السويس", en: "Suez" }, governor: { ar: "هاني رشاد علي", en: "Hany Rashad Ali" }, deputies: ["محمد عبد الله محمد علام زيدان"], renewed: true },
      { name: { ar: "شمال سيناء", en: "North Sinai" }, governor: { ar: "خالد مجاور", en: "Khaled Megawer" }, renewed: false },
      { name: { ar: "جنوب سيناء", en: "South Sinai" }, governor: { ar: "إسماعيل محمد كمال", en: "Ismail Kamal" }, renewed: true },
    ],
  },
  {
    name: { ar: "شمال ووسط الصعيد", en: "Northern and Middle Upper Egypt" },
    governorates: [
      { name: { ar: "الفيوم", en: "Faiyum" }, governor: { ar: "محمد هانئ غنيم", en: "Mohamed Hany Ghoneim" }, renewed: true },
      { name: { ar: "بني سويف", en: "Beni Suef" }, governor: { ar: "عبد الله عبد العزيز عبد الرحمن", en: "Abdullah Abdel-Aziz Abdel-Rahman" }, renewed: true },
      { name: { ar: "المنيا", en: "Minya" }, governor: { ar: "عماد كدواني", en: "Emad Kedwani" }, deputies: ["محمد علي محمد طلب علي جبر"], renewed: false },
      { name: { ar: "أسيوط", en: "Assiut" }, governor: { ar: "محمد سيد علوان", en: "Mohamed Alwan" }, renewed: true },
    ],
  },
  {
    name: { ar: "جنوب الصعيد", en: "Southern Upper Egypt" },
    governorates: [
      { name: { ar: "سوهاج", en: "Sohag" }, governor: { ar: "طارق راشد محفوظ", en: "Tarek Rashed Mahfouz" }, deputies: ["كمال سليمان محمود أحمد"], renewed: true },
      { name: { ar: "قنا", en: "Qena" }, governor: { ar: "مصطفى سليم الببلاوي", en: "Mostafa El-Beblawy" }, renewed: true },
      { name: { ar: "الأقصر", en: "Luxor" }, governor: { ar: "عبد المطلب عمارة", en: "Abdel-Muttalib Emara" }, renewed: false },
      { name: { ar: "أسوان", en: "Aswan" }, governor: { ar: "عمرو حلمي لاشين", en: "Amr Lashin" }, deputies: ["أسامة رزق محمد منصور داود"], renewed: true },
    ],
  },
  {
    name: { ar: "المحافظات الحدودية", en: "Frontier governorates" },
    governorates: [
      { name: { ar: "مطروح", en: "Matrouh" }, governor: { ar: "محمد سالمان الزملوط", en: "Mohamed El-Zamlout" }, renewed: true },
      { name: { ar: "الوادي الجديد", en: "New Valley" }, governor: { ar: "حنان مجدي نور الدين", en: "Hanan Magdy Nour El-Din" }, deputies: ["محمد نعمة عبده مرسي كجك"], renewed: true },
      { name: { ar: "البحر الأحمر", en: "Red Sea" }, governor: { ar: "وليد البرقي", en: "Walid El-Barqi" }, renewed: true },
    ],
  },
];
