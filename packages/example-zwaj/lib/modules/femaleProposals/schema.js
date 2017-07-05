import {
  Countries,
  Cities,
  Grades,
  MaritalStatus,
  Colors,
  DevotionLevel,
  SongListen,
  CountryOptions, CityOptions, NationalityOptions, GradeOptions, MaritalStatusOptions,
  ColorOptions, DevotionLevelOptions, SongListenOptions,
} from '../models/objects';
const femaleProposalSchema = {

  // default properties

  _id: {
    type: String,
    optional: false,
    viewableBy: ['members'],
    order: 10,
  },
  createdAt: {
    type: Date,
    optional: false,
    viewableBy: ['members'],
    onInsert: () => {
      return new Date();
    },
    order: 20,
  },
  userId: {
    type: String,
    optional: false,
    viewableBy: ['members'],
    resolveAs: 'user: User',
    order: 30,
  },

  // custom properties
  name: {
    label: 'الاسم الرباعي',
    type: String,
    optional: false,
    viewableBy: ['members'],
    order: 40,
  },
  age: {
    label: 'السن',
    type: Number,
    optional: false,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    order: 50,
  },
  birthCountry: {
    label: 'دولة الميلاد',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: Countries.Undefined,
    form: {
      options: function () { // options for the select form control
        return CountryOptions;
      }
    },
    order: 60,
  },
  birthCity: {
    label: 'مدينة الميلاد',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: Cities.Undefined,
    form: {
      options: function () { // options for the select form control
        return CityOptions;
      }
    },
    order: 70,
  },
  nationality: {
    label: 'الجنسية',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: Countries.SaudiArabia,
    form: {
      options: function () { // options for the select form control
        return NationalityOptions;
      }
    },
    order: 80,
  },
  country: {
    label: 'دولة الإقامة',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: Countries.Undefined,
    form: {
      options: function () { // options for the select form control
        return CountryOptions;
      }
    },
    order: 90,
  },
  city: {
    label: 'مدينة الإقامة',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: Cities.Undefined,
    form: {
      options: function () { // options for the select form control
        return CityOptions;
      }
    },
    order: 100,
  },
  address: {
    label: 'العنوان',
    type: String,
    optional: false,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    order: 110,
  },
  grade: {
    label: 'المؤهل العلمي',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: Grades.Undefined,
    form: {
      options: function () { // options for the select form control
        return GradeOptions;
      }
    },
    order: 120,
  },
  gradeArea: {
    label: 'تخصص المؤهل',
    type: String,
    optional: true,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    order: 130,
  },
  gradeYear: {
    label: 'سنة التخرج',
    type: Number,
    optional: true,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    order: 140,
  },
  health: {
    label: 'ملاحظات صحية (عاهة- مرض وراثى-..)',
    type: String,
    optional: true,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    order: 150,
  },
  maritalStatus: {
    label: 'الحالة الاجتماعية',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: MaritalStatus.Undefined,
    form: {
      options: function () { // options for the select form control
        return MaritalStatusOptions;
      }
    },
    order: 160,
  },
  kids: {
    label: 'عدد الأولاد',
    type: Number,
    optional: true,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    order: 170,
  },
  kidAges: {
    label: 'أعمارهم بالتوالي',
    type: String,
    optional: true,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    order: 180,
  },
  height: {
    label: 'الطول (سم)',
    type: Number,
    optional: false,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    order: 190,
  },
  weight: {
    label: 'الوزن (كغ)',
    type: Number,
    optional: false,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    order: 200,
  },
  color: {
    label: 'لون البشرة',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: Colors.Undefined,
    form: {
      options: function () { // options for the select form control
        return ColorOptions;
      }
    },
    order: 210,
  },
  job: {
    label: 'الوظيفة',
    type: String,
    optional: false,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    order: 220,
  },
  canLeaveJob: {
    label: 'هل تقبلين ترك العمل بطلب من الزوج؟',
    type: Boolean,
    optional: true,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    order: 230,
  },
  sponsorName: {
    label: 'الاسم الرباعي لولي الأمر',
    type: String,
    optional: false,
    viewableBy: ['members'],
    order: 240,
  },
  tel1: {
    label: 'رقم هاتف أول',
    type: String,
    optional: false,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    order: 250,
  },
  tel2: {
    label: 'رقم هاتف ثان',
    type: String,
    optional: true,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    order: 260,
  },
  devotion: {
    label: 'الاستقامة الدينية',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: DevotionLevel.Undefined,
    form: {
      options: function () { // options for the select form control
        return DevotionLevelOptions;
      }
    },
    order: 270,
  },
  songListen: {
    label: 'هل تسمعين الغناء؟',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: SongListen.Undefined,
    form: {
      options: function () { // options for the select form control
        return SongListenOptions;
      }
    },
    order: 280,
  },
  movieSee: {
    label: 'هل تشاهدين الأفلام والمسلسلات؟',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: SongListen.Undefined,
    form: {
      options: function () { // options for the select form control
        return SongListenOptions;
      }
    },
    order: 290,
  },
  notes: {
    label: 'ملاحظات إضافية',
    type: String,
    control: 'textarea',
    optional: true,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    order: 300,
  },
  otherDevotion: {
    label: 'الاستقامة الدينية',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: DevotionLevel.Undefined,
    form: {
      options: function () { // options for the select form control
        return DevotionLevelOptions;
      }
    },
    group: {
      name: "other",
      label: "الصفات المطلوبة في الزوج",
    },
    order: 310,
  },
  otherMaritalStatus: {
    label: 'الحالة الاجتماعية',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: MaritalStatus.Undefined,
    form: {
      options: function () { // options for the select form control
        return MaritalStatusOptions;
      }
    },
    group: {
      name: "other",
      label: "الصفات المطلوبة في الزوج",
    },
    order: 320,
  },
  otherNoKids: {
    label: 'هل يشترط عدم وجود أولاد؟',
    type: Boolean,
    optional: true,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    group: {
      name: "other",
      label: "الصفات المطلوبة في الزوج",
    },
    order: 330,
  },
  otherAgeFrom: {
    label: 'السن الأدنى',
    type: Number,
    optional: false,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    group: {
      name: "other",
      label: "الصفات المطلوبة في الزوج",
    },
    order: 340,
  },
  otherAgeTo: {
    label: 'السن الأعلى',
    type: Number,
    optional: false,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    group: {
      name: "other",
      label: "الصفات المطلوبة في الزوج",
    },
    order: 340,
  },
  otherNationality: {
    label: 'الجنسية',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: Countries.SaudiArabia,
    form: {
      options: function () { // options for the select form control
        return NationalityOptions;
      }
    },
    order: 345,
  },
  otherCountry: {
    label: 'دولة الإقامة',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: Countries.Undefined,
    form: {
      options: function () { // options for the select form control
        return CountryOptions;
      }
    },
    group: {
      name: "other",
      label: "الصفات المطلوبة في الزوج",
    },
    order: 350,
  },
  otherCity: {
    label: 'مدينة الإقامة',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: Cities.Undefined,
    form: {
      options: function () { // options for the select form control
        return CityOptions;
      }
    },
    group: {
      name: "other",
      label: "الصفات المطلوبة في الزوج",
    },
    order: 360,
  },
  otherGrade: {
    label: 'المؤهل العلمي',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: Grades.Undefined,
    form: {
      options: function () { // options for the select form control
        return GradeOptions;
      }
    },
    group: {
      name: "other",
      label: "الصفات المطلوبة في الزوج",
    },
    order: 370,
  },
  husbandMustHaveHouse: {
    label: 'هل يشترط وجود منزل خاص بالزواج؟',
    type: Boolean,
    optional: true,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    group: {
      name: "other",
      label: "الصفات المطلوبة في الزوج",
    },
    order: 380,
  },
  otherHeightFrom: {
    label: 'أالطول الأدنى (سم)',
    type: Number,
    optional: false,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    group: {
      name: "other",
      label: "الصفات المطلوبة في الزوج",
    },
    order: 390,
  },
  otherHeightTo: {
    label: 'الطول الأعلى (سم)',
    type: Number,
    optional: false,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    group: {
      name: "other",
      label: "الصفات المطلوبة في الزوج",
    },
    order: 400,
  },
  otherWeightFrom: {
    label: 'الوزن الأدنى (كغ)',
    type: Number,
    optional: false,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    group: {
      name: "other",
      label: "الصفات المطلوبة في الزوج",
    },
    order: 410,
  },
  otherWeightTo: {
    label: 'الوزن الأعلى (كغ)',
    type: Number,
    optional: false,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    group: {
      name: "other",
      label: "الصفات المطلوبة في الزوج",
    },
    order: 420,
  },
  otherColor: {
    label: 'لون البشرة',
    type: Number,
    control: "select", // use a select form control
    optional: false, // this field is not required
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    defaultValue: Colors.Undefined,
    form: {
      options: function () { // options for the select form control
        return ColorOptions;
      }
    },
    group: {
      name: "other",
      label: "الصفات المطلوبة في الزوج",
    },
    order: 430,
  },
  otherNotes: {
    label: 'ملاحظات إضافية',
    type: String,
    control: 'textarea',
    optional: true,
    insertableBy: ['members'],
    editableBy: ['members'],
    viewableBy: ['members'],
    group: {
      name: "other",
      label: "الصفات المطلوبة في الزوج",
    },
    order: 440,
  },
};
export default femaleProposalSchema;