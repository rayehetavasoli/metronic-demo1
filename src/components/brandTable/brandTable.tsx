import { FC } from 'react';
import ActionButtons from './actionButtons';
import { BrandTableProps } from '@/types/main';


const Table: FC<BrandTableProps> = ({ data, onEdit, onDelete }) => (
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
      {data.length > 0 ? (
        data.map((brand) => (
          <tr key={brand.id} className="odd:bg-gray-50 even:bg-white">
            <td className="p-3 text-center">{brand.brandName}</td>
            <td className="p-3 text-center">{brand.founded}</td>
            <td className="p-3 text-center">{brand.country}</td>
            <td className="p-3 text-center">{brand.industry}</td>
            <td className="p-3 flex justify-center items-center gap-4">
              <ActionButtons 
                onEdit={() => onEdit(brand)} 
                onDelete={() => onDelete(brand)} 
              />
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5} className="p-3 text-center">
            هیچ داده‌ای موجود نیست
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export { Table };

