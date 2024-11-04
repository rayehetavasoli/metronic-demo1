import { User } from "@/types";
import { Brand } from "@/types";

export const users: User[] = [
  { id: 1, firstName: 'علی', lastName: 'امینی', email: 'ali.amini@gmail.com', date: new Date('2024-04-30') },
  { id: 2, firstName: 'مهدی', lastName: 'سهرابی', email: 'mehdi.sohrabi@gmail.com', date: new Date('2024-08-13') },
  { id: 3, firstName: 'پیام', lastName: 'محمدی', email: 'payam.mohamadi@gmail.com', date: new Date('2023-11-28') },
  { id: 4, firstName: 'فاطمه', lastName: 'عباسی', email: 'fateme.abasi@gmail.com', date: new Date('2023-04-19') },
  { id: 5, firstName: 'تینا', lastName: 'متین', email: 'tina.matin@gmail.com', date: new Date('2024-03-01') },
  { id: 6, firstName: 'امیر', lastName: 'شریفی', email: 'amir.sharifi@gmail.com', date: new Date('2024-05-12') },
  { id: 7, firstName: 'سارا', lastName: 'حسینی', email: 'sara.hosseini@gmail.com', date: new Date('2023-10-10') },
  { id: 8, firstName: 'رضا', lastName: 'نظری', email: 'reza.nazari@gmail.com', date: new Date('2024-01-22') },
  { id: 9, firstName: 'نرگس', lastName: 'صفری', email: 'narges.safari@gmail.com', date: new Date('2023-07-07') },
  { id: 10, firstName: 'حمید', lastName: 'کریمی', email: 'hamid.karimi@gmail.com', date: new Date('2024-09-09') },
  { id: 11, firstName: 'پریسا', lastName: 'رهنما', email: 'parisa.rahnama@gmail.com', date: new Date('2023-06-21') },
  { id: 12, firstName: 'زهرا', lastName: 'جمالی', email: 'zahra.jamali@gmail.com', date: new Date('2023-12-30') },
  { id: 13, firstName: 'علیرضا', lastName: 'میرزایی', email: 'alireza.mirzaei@gmail.com', date: new Date('2024-03-11') },
  { id: 14, firstName: 'شبنم', lastName: 'کریمی', email: 'shabnam.karimi@gmail.com', date: new Date('2024-06-01') },
  { id: 15, firstName: 'حمیده', lastName: 'عسگری', email: 'hamideh.asgari@gmail.com', date: new Date('2023-02-20') },
  { id: 16, firstName: 'رضا', lastName: 'محمدی', email: 'reza.mohammadi@gmail.com', date: new Date('2023-03-05') },
  { id: 17, firstName: 'مریم', lastName: 'نوروزی', email: 'maryam.norouzi@gmail.com', date: new Date('2024-02-14') },
  { id: 18, firstName: 'محسن', lastName: 'زارعی', email: 'mohsen.zarei@gmail.com', date: new Date('2024-04-18') },
  { id: 19, firstName: 'سمیه', lastName: 'رستمی', email: 'somayeh.rostami@gmail.com', date: new Date('2023-11-19') },
  { id: 20, firstName: 'علی', lastName: 'نیکنام', email: 'ali.niknam@gmail.com', date: new Date('2024-07-13') },
  { id: 21, firstName: 'کیانا', lastName: 'سلطانی', email: 'kiana.soltani@gmail.com', date: new Date('2023-05-15') },
  { id: 22, firstName: 'امین', lastName: 'نوری', email: 'amin.nouri@gmail.com', date: new Date('2024-03-21') },
  { id: 23, firstName: 'شیما', lastName: 'صادقی', email: 'shima.sadeghi@gmail.com', date: new Date('2023-08-11') },
  { id: 24, firstName: 'سعید', lastName: 'رضایی', email: 'saeid.rezaei@gmail.com', date: new Date('2024-11-01') },
  { id: 25, firstName: 'محمد', lastName: 'جعفری', email: 'mohammad.jafari@gmail.com', date: new Date('2023-04-25') },
  { id: 26, firstName: 'مهدیه', lastName: 'حسینی', email: 'mahdiyeh.hosseini@gmail.com', date: new Date('2024-07-29') },
  { id: 27, firstName: 'فرهاد', lastName: 'جمالی', email: 'farhad.jamali@gmail.com', date: new Date('2024-08-30') },
  { id: 28, firstName: 'آرمان', lastName: 'مرادی', email: 'arman.moradi@gmail.com', date: new Date('2023-12-01') },
  { id: 29, firstName: 'افسانه', lastName: 'قادری', email: 'afsaneh.ghaderi@gmail.com', date: new Date('2024-03-14') },
  { id: 30, firstName: 'پیمان', lastName: 'راد', email: 'peyman.rad@gmail.com', date: new Date('2023-09-07') },
  { id: 31, firstName: 'مهسا', lastName: 'سجادی', email: 'mahsaj.sajadi@gmail.com', date: new Date('2024-10-18') },
  { id: 32, firstName: 'سحر', lastName: 'ابراهیمی', email: 'sahar.ebrahimi@gmail.com', date: new Date('2023-01-30') },
  { id: 33, firstName: 'میلاد', lastName: 'افتخاری', email: 'milad.eftekhari@gmail.com', date: new Date('2024-03-03') },
  { id: 34, firstName: 'لیلا', lastName: 'شایسته', email: 'leila.shayesteh@gmail.com', date: new Date('2024-08-17') },
  { id: 35, firstName: 'امید', lastName: 'صفایی', email: 'omid.safaei@gmail.com', date: new Date('2024-09-09') },
  { id: 36, firstName: 'نازی', lastName: 'خراسانی', email: 'nazi.khorasani@gmail.com', date: new Date('2023-03-22') },
  { id: 37, firstName: 'نوید', lastName: 'سالاری', email: 'navid.salari@gmail.com', date: new Date('2024-05-14') },
  { id: 38, firstName: 'طیبه', lastName: 'بابایی', email: 'tayebeh.babaei@gmail.com', date: new Date('2024-06-30') },
  { id: 39, firstName: 'مهتاب', lastName: 'یزدانی', email: 'mahtab.yazdani@gmail.com', date: new Date('2023-12-11') },
  { id: 40, firstName: 'مینا', lastName: 'فلاح', email: 'mina.fallah@gmail.com', date: new Date('2023-04-29') },
  { id: 41, firstName: 'کریم', lastName: 'سلیمی', email: 'karim.salimi@gmail.com', date: new Date('2024-05-23') },
  { id: 42, firstName: 'مژگان', lastName: 'کاظمی', email: 'mozhgan.kazemi@gmail.com', date: new Date('2023-08-05') },
  { id: 43, firstName: 'علیرضا', lastName: 'مرادی', email: 'alireza.moradi@gmail.com', date: new Date('2023-02-02') },
  { id: 44, firstName: 'شیوا', lastName: 'قاسمی', email: 'shiva.ghasemi@gmail.com', date: new Date('2024-01-27') },
  { id: 45, firstName: 'فائزه', lastName: 'یزدانی', email: 'faezeh.yazdani@gmail.com', date: new Date('2024-09-25') },
  { id: 46, firstName: 'عباس', lastName: 'ساعی', email: 'abbas.saei@gmail.com', date: new Date('2024-02-18') },
  { id: 47, firstName: 'احسان', lastName: 'شایگان', email: 'ehsan.shaygan@gmail.com', date: new Date('2023-07-31') },
  { id: 48, firstName: 'ندا', lastName: 'مرادی', email: 'neda.moradi@gmail.com', date: new Date('2023-06-06') },
  { id: 49, firstName: 'رها', lastName: 'اکبری', email: 'raha.akbari@gmail.com', date: new Date('2024-05-10') },
  { id: 50, firstName: 'سهیل', lastName: 'جمشیدی', email: 'soheil.jamshidi@gmail.com', date: new Date('2023-10-15') }
];

export const brands: Brand[] = [
  { id: 1, brandName: 'مرسدس بنز', founded: "1926", country: 'آلمان', industry: 'وسایل نقلیه' },
  { id: 2, brandName: 'ایسوس', founded: "1989", country: 'تایوان', industry: 'سخت‌افزار رایانه' },
  { id: 3, brandName: 'تویوتا', founded: "1937", country: 'ژاپن', industry: 'وسایل نقلیه' },
  { id: 4, brandName: 'اپل', founded: "1976", country: 'ایالات متحده آمریکا', industry: 'سخت‌افزار رایانه' },
  { id: 5, brandName: 'بوش', founded: "1886", country: 'آلمان', industry: 'لوازم برقی' },
  { id: 6, brandName: 'سامسونگ', founded: "1938", country: 'کره جنوبی', industry: 'لوازم الکترونیکی' },
  { id: 7, brandName: 'هیوندای', founded: "1967", country: 'کره جنوبی', industry: 'وسایل نقلیه' },
  { id: 8, brandName: 'کوکاکولا', founded: "1892", country: 'ایالات متحده آمریکا', industry: 'نوشیدنی' },
  { id: 9, brandName: 'نایک', founded: "1964", country: 'ایالات متحده آمریکا', industry: 'پوشاک' },
  { id: 10, brandName: 'پپسی', founded: "1898", country: 'ایالات متحده آمریکا', industry: 'نوشیدنی' },
  { id: 11, brandName: 'مایکروسافت', founded: "1975", country: 'ایالات متحده آمریکا', industry: 'نرم‌افزار' },
  { id: 12, brandName: 'سونی', founded: "1946", country: 'ژاپن', industry: 'لوازم الکترونیکی' },
  { id: 13, brandName: 'هواوی', founded: "1987", country: 'چین', industry: 'مخابرات' },
  { id: 14, brandName: 'شورلت', founded: "1911", country: 'ایالات متحده آمریکا', industry: 'وسایل نقلیه' },
  { id: 15, brandName: 'آدیداس', founded: "1949", country: 'آلمان', industry: 'پوشاک' },
  { id: 16, brandName: 'پاناسونیک', founded: "1918", country: 'ژاپن', industry: 'لوازم الکترونیکی' },
  { id: 17, brandName: 'مک‌دونالد', founded: "1940", country: 'ایالات متحده آمریکا', industry: 'غذا' },
  { id: 18, brandName: 'آمازون', founded: "1994", country: 'ایالات متحده آمریکا', industry: 'تجارت الکترونیک' },
  { id: 19, brandName: 'فورد', founded: "1903", country: 'ایالات متحده آمریکا', industry: 'وسایل نقلیه' },
  { id: 20, brandName: 'کاترپیلار', founded: "1925", country: 'ایالات متحده آمریکا', industry: 'ماشین‌آلات سنگین' },
  { id: 21, brandName: 'اینتل', founded: "1968", country: 'ایالات متحده آمریکا', industry: 'سخت‌افزار رایانه' },
  { id: 22, brandName: 'دل', founded: "1984", country: 'ایالات متحده آمریکا', industry: 'سخت‌افزار رایانه' },
  { id: 23, brandName: 'لنوو', founded: "1984", country: 'چین', industry: 'سخت‌افزار رایانه' },
  { id: 24, brandName: 'ولوو', founded: "1927", country: 'سوئد', industry: 'وسایل نقلیه' },
  { id: 25, brandName: 'گودیر', founded: "1898", country: 'ایالات متحده آمریکا', industry: 'لاستیک' },
  { id: 26, brandName: 'گوگل', founded: "1998", country: 'ایالات متحده آمریکا', industry: 'اینترنت' },
  { id: 27, brandName: 'پژو', founded: "1810", country: 'فرانسه', industry: 'وسایل نقلیه' },
  { id: 28, brandName: 'فولکس‌واگن', founded: "1937", country: 'آلمان', industry: 'وسایل نقلیه' },
  { id: 29, brandName: 'کاسیو', founded: "1946", country: 'ژاپن', industry: 'لوازم الکترونیکی' },
  { id: 30, brandName: 'نوکیا', founded: "1865", country: 'فنلاند', industry: 'مخابرات' },
  { id: 31, brandName: 'کداک', founded: "1888", country: 'ایالات متحده آمریکا', industry: 'عکاسی' },
  { id: 32, brandName: 'پی‌پال', founded: "1998", country: 'ایالات متحده آمریکا', industry: 'خدمات مالی' },
  { id: 33, brandName: 'پروکتر اند گمبل', founded: "1837", country: 'ایالات متحده آمریکا', industry: 'محصولات مصرفی' },
  { id: 34, brandName: 'فیلیپس', founded: "1891", country: 'هلند', industry: 'لوازم الکترونیکی' },
  { id: 35, brandName: 'پرادا', founded: "1913", country: 'ایتالیا', industry: 'پوشاک' },
  { id: 36, brandName: 'آلیانز', founded: "1890", country: 'آلمان', industry: 'بیمه' },
  { id: 37, brandName: 'پیرللی', founded: "1872", country: 'ایتالیا', industry: 'لاستیک' },
  { id: 38, brandName: 'زیمنس', founded: "1847", country: 'آلمان', industry: 'لوازم الکترونیکی' },
  { id: 39, brandName: 'هیتاچی', founded: "1910", country: 'ژاپن', industry: 'ماشین‌آلات صنعتی' },
  { id: 40, brandName: 'اوبر', founded: "2009", country: 'ایالات متحده آمریکا', industry: 'تکنولوژی' },
  { id: 41, brandName: 'نینتندو', founded: "1889", country: 'ژاپن', industry: 'بازی‌های ویدیویی' },
  { id: 42, brandName: 'کلگیت', founded: "1806", country: 'ایالات متحده آمریکا', industry: 'محصولات بهداشتی' },
  { id: 43, brandName: 'اکسون موبیل', founded: "1999", country: 'ایالات متحده آمریکا', industry: 'نفت و گاز' },
  { id: 44, brandName: 'لوریال', founded: "1909", country: 'فرانسه', industry: 'لوازم آرایشی' },
  { id: 45, brandName: 'کونیکا مینولتا', founded: "1873", country: 'ژاپن', industry: 'عکاسی و چاپ' },
  { id: 46, brandName: 'شل', founded: "1907", country: 'هلند', industry: 'نفت و گاز' },
  { id: 47, brandName: 'آئودی', founded: "1909", country: 'آلمان', industry: 'وسایل نقلیه' },
  { id: 48, brandName: 'رولکس', founded: "1905", country: 'سوئیس', industry: 'ساعت‌سازی' },
  { id: 49, brandName: 'پرشیا خودرو', founded: "2005", country: 'ایران', industry: 'خدمات خودرو' },
  { id: 50, brandName: 'یاماها', founded: "1887", country: 'ژاپن', industry: 'موسیقی و وسایل نقلیه' }
];
