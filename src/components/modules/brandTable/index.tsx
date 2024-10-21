import HeaderSection from './headerSection';
import Footer from './footer';
import { Table } from './brandTable';
import { FC } from 'react';


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
  
const BrandTable: FC<BrandTableProps> = ({ data }) => {
  return (
    <div className="px-10 py-8 bg-gray-50 rounded-3xl shadow-lg w-full mx-20 ">
      <HeaderSection />
      <Table data={data} />
      <Footer />
    </div>
  );
};


export {BrandTable};
