import { User } from "@/types";
import { Brand } from "@/types";

export const users: User[] = [
    { id: 1, firstName: 'علی', lastName: 'امینی', email: 'ali.amini@gmail.com', date: new Date('2024-04-30') },
    { id: 2, firstName: 'مهدی', lastName: 'سهرابی', email: 'mehdi.sohrabi@gmail.com', date: new Date('2024-08-13') },
    { id: 3, firstName: 'پیام', lastName: 'محمدی', email: 'payam.mohamadi@gmail.com', date: new Date('2023-11-28') },
    { id: 4, firstName: 'فاطمه', lastName: 'عباسی', email: 'fateme.abasi@gmail.com', date: new Date('2023-04-19') },
    { id: 5, firstName: 'تینا', lastName: 'متین', email: 'tina.matin@gmail.com', date: new Date('2024-03-01') },
  ];

  export const brands: Brand[] = [
    {id: 1 , brandName: 'مرسدس بنز', founded: "1926", country: 'آلمان', industry: 'وسایل نقلیه' },
    {id: 2 , brandName: 'ایسوس', founded: "1989", country: 'تایوان', industry: 'سخت‌افزار رایانه' },
    {id: 3 , brandName: 'تویوتا', founded: "1937", country: 'ژاپن', industry: 'وسایل نقلیه' },
    {id: 4 , brandName: 'اپل', founded: "1976", country: 'ایالات متحده آمریکا', industry: 'سخت‌افزار رایانه' },
    {id: 5 , brandName: 'بوش', founded: "1886", country: 'آلمان', industry: 'لوازم برقی' },
  ];