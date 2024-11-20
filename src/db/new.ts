
  export enum ElevatorUsageType {
    // اداری-تجاری
    Commercial = "اداری-تجاری",
  
    // تخت بر
    BedLift = "تخت بر",
  
    // خودرو بر
    CarLift = "خودرو بر",
  
    // مسکونی
    Residential = "مسکونی",
  }
  export enum ElevatorBlockType {
    // تیپ الف
    TypeA = "الف",
  
    // تیپ ب
    TypeB = "ب",
  
    // تیپ ج
    TypeC = "ج",
  
    // تیپ د
    TypeD = "د",
  
    // تیپ و
    TypeE = "و",
  }

  export enum ElevatorSpeed {
    // سرعت 1 متر بر ثانیه
    Speed1 = "1m/s",
  
    // سرعت 1.6 متر بر ثانیه
    Speed1_6 = "1.6m/s",
  
    // سرعت 2 متر بر ثانیه
    Speed2 = "2m/s",
  
    // سرعت 2.5 متر بر ثانیه
    Speed2_5 = "2.5m/s",
  
    // سرعت 4 متر بر ثانیه
    Speed4 = "4m/s",
  }

  export enum ElevatorCabinType {
    // اتاقک
    Standard = "اتاقک",
  
    // پاناروما
    Panorama = "پاناروما",
  }

  export enum ElevatorCabinHeight {
    // ارتفاع 210 سانتی‌متر
    Height210 = "210",
  
    // ارتفاع 220 سانتی‌متر
    Height220 = "220",
  
    // ارتفاع 230 سانتی‌متر
    Height230 = "230",
  
    // ارتفاع 240 سانتی‌متر
    Height240 = "240",
  
    // ارتفاع 250 سانتی‌متر
    Height250 = "250",
  }

  export enum ElevatorMachineRoomLocation {
    // بالای چاه
    TopOfShaft = "بالای چاه",
  
    // پایین چاه
    BottomOfShaft = "پایین چاه",
  
    // بدون موتورخانه
    MachineRoomLess = "بدون موتورخانه",
  }

  export enum ElevatorMotorSystem {
    // گیربکس
    Gearbox = "گیربکس",
  
    // گرلس
    Gearless = "گرلس",
  }

  export enum ElevatorInstallationRatio {
    // نسبت نصب 1:1
    Ratio1To1 = "1:1",
  
    // نسبت نصب 2:1
    Ratio2To1 = "2:1",
  }

  export enum ElevatorMotorPulleyDiameter {
    // قطر فلکه موتور 28 سانتی‌متر
    Diameter28 = "28",
  
    // قطر فلکه موتور 32 سانتی‌متر
    Diameter32 = "32",
  
    // قطر فلکه موتور 40 سانتی‌متر
    Diameter40 = "40",
  
    // قطر فلکه موتور 56 سانتی‌متر
    Diameter56 = "56",
  
    // قطر فلکه موتور 65 سانتی‌متر
    Diameter65 = "65",
  }

  export enum ElevatorIdlePulleyGrooves {
    // تعداد شیار فلکه هرزگرد: 4
    Grooves4 = "4",
  
    // تعداد شیار فلکه هرزگرد: 5
    Grooves5 = "5",
  
    // تعداد شیار فلکه هرزگرد: 6
    Grooves6 = "6",
  
    // تعداد شیار فلکه هرزگرد: 7
    Grooves7 = "7",
  
    // تعداد شیار فلکه هرزگرد: 8
    Grooves8 = "8",
  
    // تعداد شیار فلکه هرزگرد: 9
    Grooves9 = "9",
  
    // تعداد شیار فلکه هرزگرد: 10
    Grooves10 = "10",
  
    // تعداد شیار فلکه هرزگرد: 11
    Grooves11 = "11",
  
    // تعداد شیار فلکه هرزگرد: 12
    Grooves12 = "12",
  }

  export enum ElevatorCabinConnectionSystem {
    // اتصال کابین با پیچ و مهره
    Bolted = "پیچ و مهره",
  
    // اتصال کابین با جوشکاری
    Welded = "جوشکاری",
  }

  export enum ElevatorCabinDecoration {
    // تمام استیل
    FullSteel = "تمام استیل",
  
    // تمام استیل طرح دار
    PatternedSteel = "تمام استیل طرح دار",
  
    // شیشه‌ای
    Glass = "شیشه‌ای",
  
    // ام دی اف- استیل
    MDFSteel = "ام دی اف-استیل",
  
    // فرمیکا- استیل
    FormicaSteel = "فرمیکا-استیل",
  }

  export enum ElevatorParachuteType {
    // پاراشوت تدریجی
    Progressive = "تدریجی",
  
    // پاراشوت لحظه‌ای
    Instantaneous = "لحظه‌ای",
  }

  export enum ElevatorDoorPosition {
    // موقعیت درب سمت چپ
    Left = "درب سمت چپ",
  
    // موقعیت درب سمت راست
    Right = "درب سمت راست",
  
    // موقعیت درب روبه رو
    Front = "درب رو به رو",
  }

  export enum ElevatorDoorSystemType {
    // سیستم درب اتوبوسی
    Bus = "اتوبوسی",  
    
    // سیستم درب تلسکوپی
    Telescopic = "تلسکوپی",  
    
    // سیستم درب سانترال
    Central = "سانترال",  
    
    // سیستم درب لولایی
    Hinged = "لولایی",  
  }

  export enum ElevatorDoorSize {
    // اندازه درب 70 سانتیمتر
    Size70 = "70",
  
    // اندازه درب 80 سانتیمتر
    Size80 = "80",
  
    // اندازه درب 90 سانتیمتر
    Size90 = "90",
  
    // اندازه درب 100 سانتیمتر
    Size100 = "100",
  
    // اندازه درب 110 سانتیمتر
    Size110 = "110",
  
    // اندازه درب 120 سانتیمتر
    Size120 = "120",
  }

  export enum ElevatorSelection {
    // انتخاب دارد
    Yes = "دارد",
  
    // انتخاب ندارد
    No = "ندارد",
  }

  export enum ElevatorRailSize {
    // سایز ریل T5 با عرض 50 میلیمتر
    T5_50 = "T5 (50)",
  
    // سایز ریل T9 با عرض 70 میلیمتر
    T9_70 = "T9 (70)",
  
    // سایز ریل T16 با عرض 89 میلیمتر
    T16_89 = "T16 (89)",
  
    // سایز ریل T16 با عرض 90 میلیمتر
    T16_90 = "T16 (90)",
  
    // سایز ریل T16 با عرض 127 میلیمتر
    T16_127 = "T16 (127)",
  }

  export enum ElevatorControlPanel {
    // تابلو AC2
    AC2 = "AC2",
  
    // تابلو VVVF
    VVVF = "VVVF",
  }

  export enum ElevatorControlSystem {
    // سیستم تابلو Open Loop
    OpenLoop = "Open Loop",
  
    // سیستم تابلو Close Loop
    CloseLoop = "Close Loop",
  }

  export enum ElevatorDrivePower {
    // قدرت درایو 7.5 کیلووات
    Power7_5KW = "7.5 kW",
  
    // قدرت درایو 11 کیلووات
    Power11KW = "11 kW",
  
    // قدرت درایو 15 کیلووات
    Power15KW = "15 kW",
  
    // قدرت درایو 18.5 کیلووات
    Power18_5KW = "18.5 kW",
  
    // قدرت درایو 22 کیلووات
    Power22KW = "22 kW",
  
    // قدرت درایو 30 کیلووات
    Power30KW = "30 kW",
  }

  export enum ElevatorEmergencyRescueSystem {
    // نجات اضطراری ترکیبی
    Hybrid = "ترکیبی",
  
    // نجات اضطراری با تابلو مستقل
    IndependentPanel = "تابلو مستقل",
  }

  export enum ElevatorPhotoEyeType {
    // چشمی نقطه‌ای
    Point = "نقطه‌ای",
  
    // چشمی پرده‌ای
    Curtain = "پرده‌ای",
  }

  export enum ElevatorWireRopeDiameter {
    // قطر سیم بکسل 5 میلی‌متر
    Diameter5 = "5mm",
  
    // قطر سیم بکسل 6 میلی‌متر
    Diameter6 = "6mm",
  
    // قطر سیم بکسل 7 میلی‌متر
    Diameter7 = "7mm",
  
    // قطر سیم بکسل 8 میلی‌متر
    Diameter8 = "8mm",
  
    // قطر سیم بکسل 9 میلی‌متر
    Diameter9 = "9mm",
  
    // قطر سیم بکسل 10 میلی‌متر
    Diameter10 = "10mm",
  
    // قطر سیم بکسل 11 میلی‌متر
    Diameter11 = "11mm",
  
    // قطر سیم بکسل 12 میلی‌متر
    Diameter12 = "12mm",
  
    // قطر سیم بکسل 13 میلی‌متر
    Diameter13 = "13mm",
  }

  export enum ElevatorCabinFrameSize {
    // شاسی کابین 1 متری
    OneMeter = "1متری",
  
    // شاسی کابین 2 متری
    TwoMeter = "2متری",
  }
  
  export enum ElevatorOilerType {
    // روغن‌دان جذبی
    Absorptive = "جذبی",
  }
  
  export enum ElevatorCounterweightType {
    // وزنه بتنی
    Concrete = "بتنی",
  
    // وزنه پلاستیکی
    Plastic = "پلاستیکی",
  
    // وزنه چدنی
    CastIron = "چدنی",
  
    // وزنه گالوانیزه
    Galvanized = "گالوانیزه",
  }
  
  export enum ElevatorCounterweightFrameWidth {
    // عرض قاب وزنه 64 سانتی‌متر
    Width64cm = "64cm",
  
    // عرض قاب وزنه 74 سانتی‌متر
    Width74cm = "74cm",
  
    // عرض قاب وزنه 84 سانتی‌متر
    Width84cm = "84cm",
  
    // عرض قاب وزنه 94 سانتی‌متر
    Width94cm = "94cm",
  
    // عرض قاب وزنه 104 سانتی‌متر
    Width104cm = "104cm",
  }
  
  export enum ElevatorTravellingCable {
    // تراولینگ کابل با 16 رشته
    Cable16Strands = "16 رشته",
  
    // تراولینگ کابل با 24 رشته
    Cable24Strands = "24 رشته",
  }
    
  export enum ElevatorParachuteType {
    // پاراشوت تک جهته
    Unidirectional = "تک جهته",
  
    // پاراشوت دو جهته
    Bidirectional = "دو جهته",
  }
  
    
  