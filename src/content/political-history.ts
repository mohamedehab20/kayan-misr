// History of Egyptian parties and a citizen's political guide (Arabic/English).
// General awareness content: dates and legal thresholds should be reviewed by a legal specialist before publishing.

type Text = { ar: string; en: string };

export const historyLabels = {
  jump: [
    { href: "#pillars", label: { ar: "أركان المنارة", en: "Pillars" } },
    { href: "#simulations", label: { ar: "نماذج المحاكاة", en: "Simulations" } },
    { href: "#party-history", label: { ar: "تاريخ الأحزاب", en: "Party history" } },
    { href: "#party-formation", label: { ar: "تشكيل الأحزاب", en: "Party origins" } },
    { href: "#citizen-guide", label: { ar: "دليل المواطن السياسي", en: "Citizen's guide" } },
  ],
  erasEyebrow: { ar: "ذاكرة الحياة الحزبية", en: "A memory of party life" },
  erasTitle: { ar: "تاريخ الأحزاب في مصر", en: "The history of parties in Egypt" },
  erasSubtitle: {
    ar: "أكثر من قرن من العمل الحزبي، من أول الأحزاب المنظمة حتى برلمان 2026.",
    en: "More than a century of party politics, from the first organized parties to the 2026 parliament.",
  },
  formationTitle: { ar: "كيف تشكّل كل حزب في البرلمان الحالي", en: "How each party in today's parliament was formed" },
  formationSubtitle: {
    ar: "نشأة الأحزاب الممثلة في مجلس النواب بعد انتخابات 2025، مرتبة حسب عدد المقاعد.",
    en: "The origins of the parties in the House after the 2025 elections, ordered by seats.",
  },
  founded: { ar: "التأسيس", en: "Founded" },
  seats: { ar: "مقعدًا", en: "seats" },
  guideEyebrow: { ar: "اعرف حقوقك وواجباتك", en: "Know your rights and duties" },
  guideTitle: { ar: "دليل المواطن السياسي", en: "The citizen's political guide" },
  guideSubtitle: {
    ar: "كل ما تحتاجه للمشاركة: من التصويت والترشح إلى الانضمام للأحزاب وإيصال صوتك.",
    en: "Everything you need to take part: from voting and running for office to joining a party and making your voice heard.",
  },
  guideNote: {
    ar: "معلومات توعوية عامة مستندة إلى الدستور والقوانين المنظمة؛ راجع الهيئة الوطنية للانتخابات والجهات الرسمية للتفاصيل المحدّثة.",
    en: "General awareness information based on the constitution and governing laws; check the National Election Authority and official bodies for up-to-date details.",
  },
};

export const partyEras: { years: string; title: Text; text: Text }[] = [
  {
    years: "1907",
    title: { ar: "ميلاد الأحزاب الأولى", en: "The first parties" },
    text: {
      ar: "ظهرت أوائل الأحزاب المصرية المنظمة، أبرزها الحزب الوطني بقيادة مصطفى كامل، وحزب الأمة الذي ارتبط بأحمد لطفي السيد.",
      en: "Egypt's first organized parties appeared, notably Mustafa Kamel's National Party and the Umma Party associated with Ahmed Lutfi el-Sayed.",
    },
  },
  {
    years: "1919 – 1952",
    title: { ar: "الحقبة الليبرالية", en: "The liberal era" },
    text: {
      ar: "تأسس الوفد مع ثورة 1919 بقيادة سعد زغلول، وبعد دستور 1923 عرفت مصر تعددية حزبية واسعة، منها الأحرار الدستوريون والهيئة السعدية والكتلة الوفدية.",
      en: "The Wafd rose with the 1919 revolution under Saad Zaghloul; after the 1923 constitution Egypt had broad multi-party politics, including the Liberal Constitutionalists, the Saadists and the Wafdist Bloc.",
    },
  },
  {
    years: "1953 – 1976",
    title: { ar: "التنظيم السياسي الواحد", en: "The single political organization" },
    text: {
      ar: "حُلّت الأحزاب في يناير 1953، وحلّت محلها تنظيمات سياسية واحدة: هيئة التحرير، ثم الاتحاد القومي، ثم الاتحاد الاشتراكي العربي.",
      en: "Parties were dissolved in January 1953 and replaced by single political organizations: the Liberation Rally, the National Union, then the Arab Socialist Union.",
    },
  },
  {
    years: "1976 – 2011",
    title: { ar: "عودة التعددية المقيدة", en: "Restricted pluralism returns" },
    text: {
      ar: "بدأت المنابر الثلاثة (يمين ووسط ويسار) عام 1976 ثم صدر قانون الأحزاب السياسية رقم 40 لسنة 1977. تأسس الحزب الوطني الديمقراطي عام 1978 وهيمن على الحياة السياسية، بجانب أحزاب معارضة مثل الوفد الجديد والتجمع.",
      en: "Three 'platforms' (right, centre, left) began in 1976, followed by Political Parties Law No. 40 of 1977. The National Democratic Party, founded in 1978, dominated politics alongside opposition parties such as the New Wafd and Tagammu.",
    },
  },
  {
    years: "2011 – 2013",
    title: { ar: "انفتاح ما بعد يناير", en: "The post-January opening" },
    text: {
      ar: "بعد ثورة 25 يناير حُلّ الحزب الوطني بحكم قضائي، وعُدّل قانون الأحزاب ليصبح التأسيس بالإخطار، فظهرت عشرات الأحزاب الجديدة.",
      en: "After the 25 January revolution the NDP was dissolved by court ruling, and the parties law was amended to allow founding by notification, leading to dozens of new parties.",
    },
  },
  {
    years: "2014 – 2026",
    title: { ar: "دستور 2014 والبرلمانات الجديدة", en: "The 2014 constitution and new parliaments" },
    text: {
      ar: "حظر دستور 2014 قيام الأحزاب على أساس ديني، وأُجريت انتخابات برلمانية في 2015 و2020 و2025، وعاد مجلس الشيوخ منذ 2020 بعد تعديلات 2019 الدستورية.",
      en: "The 2014 constitution banned parties based on religion; parliamentary elections were held in 2015, 2020 and 2025, and the Senate returned in 2020 after the 2019 constitutional amendments.",
    },
  },
];

// How each party now in the House was formed, keyed by its English name in content/political-life.ts
export const partyFormation: Record<string, Text> = {
  "Nation's Future": {
    ar: "انطلق عام 2014 من حملة شبابية، وكان محمد بدران أول رئيس له. حلّ ثانيًا في انتخابات 2015، ثم أصبح حزب الأغلبية منذ انتخابات 2020.",
    en: "Launched in 2014 from a youth campaign, with Mohamed Badran as its first chairman. It came second in 2015 and has been the majority party since 2020.",
  },
  "Homeland Defenders": {
    ar: "تأسس عام 2013 بمبادرة من اللواء جلال هريدي ومجموعة من القيادات العسكرية والمدنية السابقة، وصار من أكبر الكتل البرلمانية.",
    en: "Founded in 2013 on the initiative of retired General Galal Haridy and former military and civilian figures; it became one of the largest parliamentary blocs.",
  },
  "National Front": {
    ar: "أُعلن تأسيسه في 30 ديسمبر 2024 برئاسة وزير الإسكان الأسبق عاصم الجزار، وخاض أول انتخابات له في 2025.",
    en: "Announced on 30 December 2024 under former housing minister Assem El-Gazzar; it ran in its first election in 2025.",
  },
  "Republican People's": {
    ar: "تأسس عام 2012 كحزب ليبرالي، ويرأسه حازم عمر.",
    en: "Founded in 2012 as a liberal party, chaired by Hazem Omar.",
  },
  "Egyptian Social Democratic": {
    ar: "تأسس عام 2011 بعد ثورة يناير، ومن مؤسسيه محمد أبو الغار وزياد بهاء الدين وحازم الببلاوي.",
    en: "Founded in 2011 after the January revolution; its founders include Mohamed Abul-Ghar, Ziad Bahaa-Eldin and Hazem El-Beblawi.",
  },
  Wafd: {
    ar: "وُلد الوفد من وفد سعد زغلول عام 1918 وقاد ثورة 1919. حُلّ عام 1953، ثم أعاد فؤاد سراج الدين تأسيسه عام 1978 باسم الوفد الجديد، وعاد للعمل بحكم قضائي عام 1984.",
    en: "Born from Saad Zaghloul's 1918 delegation, it led the 1919 revolution. Dissolved in 1953, it was re-founded by Fouad Serageldin in 1978 as the New Wafd and resumed work by court ruling in 1984.",
  },
  Justice: {
    ar: "تأسس عام 2011 على يد مجموعة من الشباب الذين شاركوا في ثورة يناير، ومنهم مصطفى النجار.",
    en: "Founded in 2011 by young activists from the January revolution, including Mostafa El-Naggar.",
  },
  "Reform and Development": {
    ar: "حزب ليبرالي حصل على ترخيصه عام 2011، ويرتبط بمحمد أنور عصمت السادات.",
    en: "A liberal party licensed in 2011, associated with Mohamed Anwar Esmat Sadat.",
  },
  "Al-Nour": {
    ar: "تأسس عام 2011 ذراعًا سياسية للدعوة السلفية بالإسكندرية، وحلّ ثانيًا في انتخابات 2011 – 2012.",
    en: "Founded in 2011 as the political arm of the Salafist Call in Alexandria; it came second in the 2011–2012 elections.",
  },
  "Tagammu (National Progressive Unionist)": {
    ar: "خرج من منبر اليسار عام 1976، وأسسه خالد محيي الدين أحد الضباط الأحرار.",
    en: "Emerged from the leftist platform in 1976, founded by Khaled Mohieddin, one of the Free Officers.",
  },
  Congress: {
    ar: "تأسس عام 2012 بمبادرة من عمرو موسى، باندماج عدد من الأحزاب الصغيرة.",
    en: "Founded in 2012 on Amr Moussa's initiative through a merger of several small parties.",
  },
  "Egyptian Freedom": {
    ar: "تأسس عام 2011، وكان عمرو حمزاوي من أبرز مؤسسيه.",
    en: "Founded in 2011, with Amr Hamzawy among its leading founders.",
  },
};

type GuideItem = { title: Text; points: Text[] };

export const citizenGuide: GuideItem[] = [
  {
    title: { ar: "حقك في التصويت", en: "Your right to vote" },
    points: [
      {
        ar: "كل مصري أتم 18 عامًا مُقيَّد تلقائيًا في قاعدة بيانات الناخبين ببياناته في الرقم القومي.",
        en: "Every Egyptian aged 18 or over is registered automatically in the voter database from their national ID.",
      },
      {
        ar: "اعرف لجنتك الانتخابية من خلال الموقع الرسمي للهيئة الوطنية للانتخابات.",
        en: "Find your polling station on the National Election Authority's official website.",
      },
      {
        ar: "المصريون بالخارج يصوتون في السفارات والقنصليات وفق الضوابط التي تعلنها الهيئة.",
        en: "Egyptians abroad vote at embassies and consulates under the rules the Authority announces.",
      },
    ],
  },
  {
    title: { ar: "يوم الانتخاب خطوة بخطوة", en: "Election day, step by step" },
    points: [
      { ar: "احمل بطاقة الرقم القومي وتوجه إلى لجنتك.", en: "Bring your national ID card and go to your polling station." },
      { ar: "يتحقق رئيس اللجنة من اسمك في كشف الناخبين.", en: "The station head checks your name on the voter list." },
      { ar: "تختار مرشحك أو قائمتك سرًّا خلف الساتر وتضع الورقة في الصندوق.", en: "You mark your candidate or list in secret behind the screen and cast the ballot." },
      { ar: "تغمس إصبعك في الحبر الفوسفوري ثم توقّع أمام اسمك.", en: "You dip your finger in the phosphoric ink and sign next to your name." },
    ],
  },
  {
    title: { ar: "شروط الترشح", en: "Running for office" },
    points: [
      {
        ar: "مجلس النواب: مصري متمتع بحقوقه المدنية والسياسية، حاصل على شهادة إتمام التعليم الأساسي على الأقل، ولا يقل سنه عن 25 عامًا.",
        en: "House of Representatives: an Egyptian with full civil and political rights, at least a basic-education certificate, aged 25 or over.",
      },
      {
        ar: "مجلس الشيوخ: لا يقل السن عن 35 عامًا، مع مؤهل جامعي أو ما يعادله.",
        en: "Senate: aged 35 or over, with a university degree or equivalent.",
      },
      { ar: "المجالس المحلية: لا يقل السن عن 21 عامًا.", en: "Local councils: aged 21 or over." },
      {
        ar: "يُشترط أداء الخدمة العسكرية أو الإعفاء منها قانونًا للمرشحين من الذكور.",
        en: "Male candidates must have completed military service or be legally exempt.",
      },
    ],
  },
  {
    title: { ar: "الانضمام إلى حزب أو تأسيسه", en: "Joining or founding a party" },
    points: [
      {
        ar: "تنضم بطلب عضوية للحزب ومعه بطاقة الرقم القومي، ولا يجوز الجمع بين عضوية حزبين.",
        en: "You join by submitting a membership application with your national ID; you cannot be a member of two parties.",
      },
      {
        ar: "يُحظر الانتماء الحزبي على أعضاء الهيئات القضائية والقوات المسلحة والشرطة.",
        en: "Members of the judiciary, the armed forces and the police may not join parties.",
      },
      {
        ar: "يُؤسَّس الحزب بإخطار لجنة شؤون الأحزاب، بتوقيع 5000 عضو مؤسس على الأقل من 10 محافظات، بحد أدنى 300 عضو في كل محافظة.",
        en: "A party is founded by notifying the Political Parties Committee, with at least 5,000 founding members from 10 governorates and at least 300 in each.",
      },
      {
        ar: "يحظر الدستور قيام الأحزاب على أساس ديني أو بناءً على التفرقة بسبب الجنس أو الأصل أو الطائفة.",
        en: "The constitution bans parties based on religion or on discrimination by sex, origin or sect.",
      },
    ],
  },
  {
    title: { ar: "صوتك مسموع بين الانتخابات", en: "Your voice between elections" },
    points: [
      {
        ar: "المشاركة في الحياة العامة واجب وطني يكفله الدستور، ولكل مواطن حق الانتخاب والترشح وإبداء الرأي في الاستفتاء (المادة 87).",
        en: "Taking part in public life is a national duty under the constitution, and every citizen has the right to vote, run and vote in referendums (Article 87).",
      },
      {
        ar: "لكل فرد حق مخاطبة السلطات العامة كتابةً وبتوقيعه (المادة 85).",
        en: "Everyone has the right to address public authorities in writing, under their own signature (Article 85).",
      },
      {
        ar: "تواصل مع نائب دائرتك، أو قدّم شكواك عبر منظومة الشكاوى الحكومية الموحدة.",
        en: "Contact your constituency's MP, or file a complaint through the Unified Government Complaints System.",
      },
      {
        ar: "شارك في جلسات الاستماع والحوار المجتمعي حول مشروعات القوانين والسياسات العامة.",
        en: "Take part in public hearings and community dialogue on draft laws and public policies.",
      },
    ],
  },
];
