export const Tribe = {
  Undefined: 0,
  Tribal: 1,
  NoneTribal: 2,
};
export const Countries = {
  Undefined: 0,
  SaudiArabia: 2,
  Bahrain: 3,
  Kuwait: 4,
  Oman: 5,
  Qatar: 6,
  Emirates: 7,
  Yemen: 8,
  Egypt: 9,
};
export const Cities = {
  Undefined: 0,
  Dammam: 2,
  Riyadh: 3,
  Jeddah: 4,
  Tabook: 5,
  Jizan: 6,
  Kuwait: 7,
  Alahmady: 8,
  Almanamah: 9,
  Almuharraq: 10,
  Masqat: 11,
  AbuDhabi: 12,
  Sanaa: 13,
  HadhrMawt: 14,
  Cairo: 15,
  Alexandria: 16,
};
export const Grades = {
  Undefined: 0,
  Bachelor: 2,
  Lisans: 3,
  Institute: 4,
  Deploma: 5,
  High: 6,
  Middle: 7,
  NoGrade: 8,
};
export const MaritalStatus = {
  Undefined: 0,
  Single: 2,
  Married: 3,
  Divorced: 4,
  Widow: 5,
};
export const Colors = {
  Undefined: 0,
  White: 2,
  Brown: 3,
  Black: 4,
};
export const DevotionLevel = {
  Undefined: 0,
  Good: 2,
  Moderate: 3,
  Weak: 4,
};
export const SongListen = {
  Undefined: 0,
  Much: 2,
  Sometimes: 3,
  Rarely: 4,
  Never: 5,
};
export const Gender = {
  Undefined: 0,
  Male: 1,
  Female: 2,
};

export const GenderOptions = [
          {value: Gender.Undefined, label: "غير محدد"},
          {value: Gender.Male, label: "رجل"},
          {value: Gender.Female, label: "امرأة"},
        ];
export const CountryOptions = [
          {value: Countries.Undefined, label: "غير محدد"},
          {value: Countries.SaudiArabia, label: "السعودية"},
          {value: Countries.Bahrain, label: "البحرين"},
          {value: Countries.Kuwait, label: "الكويت"},
          {value: Countries.Oman, label: "عمان"},
          {value: Countries.Qatar, label: "قطر"},
          {value: Countries.Emirates, label: "الإمارات"},
          {value: Countries.Yemen, label: "اليمن"},
          {value: Countries.Egypt, label: "مصر"},
        ];
export const CityOptions = [
  {value: Cities.Undefined, label: "غير محدد"},
  {value: Cities.Dammam, label: "الدمام"},
  {value: Cities.Riyadh, label: "الرياض"},
  {value: Cities.Jeddah, label: "جدة"},
  {value: Cities.Tabook, label: "تبوك"},
  {value: Cities.Jizan, label: "جيزان"},
  {value: Cities.Kuwait, label: "الكويت"},
  {value: Cities.Alahmady, label: "الأحمدي"},
  {value: Cities.Almanamah, label: "المنامة"},
  {value: Cities.Almuharraq, label: "المحرق"},
  {value: Cities.Masqat, label: "مسقط"},
  {value: Cities.AbuDhabi, label: "أبو ظبي"},
  {value: Cities.Sanaa, label: "صنعاء"},
  {value: Cities.HadhrMawt, label: "حضرموت"},
  {value: Cities.Cairo, label: "القاهرة"},
  {value: Cities.Alexandria, label: "الإسكندرية"},
];
export const NationalityOptions = [
  {value: Countries.Undefined, label: "غير محدد"},
  {value: Countries.SaudiArabia, label: "سعودي"},
  {value: Countries.Bahrain, label: "بحريني"},
  {value: Countries.Kuwait, label: "كويتي"},
  {value: Countries.Oman, label: "عماني"},
  {value: Countries.Qatar, label: "قطري"},
  {value: Countries.Emirates, label: "إماراتي"},
  {value: Countries.Yemen, label: "يمني"},
  {value: Countries.Egypt, label: "مصري"},
];
export const GradeOptions = [
  {value: Grades.Undefined, label: "غير محدد"},
  {value: Grades.Bachelor, label: "بكالوريوس"},
  {value: Grades.Lisans, label: "ليسانس"},
  {value: Grades.Institute, label: "معهد"},
  {value: Grades.Deploma, label: "دبلوم"},
  {value: Grades.High, label: "الثانوي"},
  {value: Grades.Middle, label: "المتوسط"},
  {value: Grades.NoGrade, label: "لا يوجد"},
];
export const MaritalStatusOptions = [
  {value: MaritalStatus.Undefined, label: "غير محدد"},
  {value: MaritalStatus.Single, label: "أعزب"},
  {value: MaritalStatus.Married, label: "متزوج"},
  {value: MaritalStatus.Divorced, label: "مطلق"},
  {value: MaritalStatus.Widow, label: "أرمل"},
];
export const ColorOptions = [
  {value: Colors.Undefined, label: "غير محدد"},
  {value: Colors.White, label: "أبيض"},
  {value: Colors.Brown, label: "قمحي"},
  {value: Colors.Black, label: "أسمر"},
];
export const DevotionLevelOptions = [
  {value: DevotionLevel.Undefined, label: "غير محدد"},
  {value: DevotionLevel.Good, label: "جيد"},
  {value: DevotionLevel.Moderate, label: "وسط"},
  {value: DevotionLevel.Weak, label: "ضعيف"},
];
export const SongListenOptions = [
  {value: SongListen.Undefined, label: "غير محدد"},
  {value: SongListen.Much, label: "كثيرا"},
  {value: SongListen.Sometimes, label: "أحيانا"},
  {value: SongListen.Rarely, label: "نادرا"},
  {value: SongListen.Never, label: "أبدا"},
];
export const TribeOptions = [
  {value: Tribe.Undefined, label: "غير محدد"},
  {value: Tribe.NoneTribal, label: "غير قبلي"},
  {value: Tribe.Tribal, label: "قبلي"},
];
