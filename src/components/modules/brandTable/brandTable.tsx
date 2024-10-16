import { FC } from 'react';
import ActionButtons from './actionButtons';

interface Brand {
  name: string;
  founded: number;
  country: string;
  industry: string;
}

interface BrandTableProps {
  data: Brand[]; 
}
const brands: Brand[] = [
  { name: 'مرسدس بنز', founded: 1926, country: 'آلمان', industry: 'وسایل نقلیه' },
  { name: 'ایسوس', founded: 1989, country: 'تایوان', industry: 'سخت‌افزار رایانه' },
  { name: 'تویوتا', founded: 1937, country: 'ژاپن', industry: 'وسایل نقلیه' },
  { name: 'اپل', founded: 1976, country: 'ایالات متحده آمریکا', industry: 'سخت‌افزار رایانه' },
  { name: 'بوش', founded: 1886, country: 'آلمان', industry: 'لوازم برقی' },
];

const Table: FC<BrandTableProps> = ({ data }) => (
  <table className="min-w-full bg-white rounded-[28px] shadow-lg text-right" dir="rtl">
    <thead className="bg-gray-100">
      <tr>
        {['نام', 'سال تاسیس', 'کشور', 'صنعت', 'عملیات'].map((header, index) => (
          <th key={index} className="p-3 text-center">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
        {data?.map((brand, index) => (
          <tr key={index} className="odd:bg-gray-50 even:bg-white gap-3">
            <td className="p-3 text-center">{brand.name}</td>
            <td className="p-3 text-center">{brand.founded}</td>
            <td className="p-3 text-center">{brand.country}</td>
            <td className="p-3 text-center">{brand.industry}</td>
            <td className="p-3 flex  justify-center items-center gap-4">
              <ActionButtons />
            </td>
          </tr>
        ))
      ||
        <tr>
          <td colSpan={5} className="p-3 text-center">هیچ داده‌ای موجود نیست</td>
        </tr>
      }
    </tbody>
  </table>
);

export { Table , brands };
