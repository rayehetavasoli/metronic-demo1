import { FC } from 'react';
import ActionButtons from './actionButtons';
import { BrandTableProps } from '@/types/main';


const Table: FC<BrandTableProps> = ({ data, onEdit, onDelete }) => (
  <table className="min-w-full bg-white dark:bg-dark-bg-secondary rounded-[28px] shadow-lg text-right" dir="rtl">
    <thead className="bg-gray-100 dark:bg-dark-even-table">
      <tr>
        {['نام', 'سال تاسیس', 'کشور', 'صنعت', 'عملیات'].map((header, index) => (
          <th key={index} className="p-3 text-center text-gray-700 dark:text-gray-300">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.length > 0 ? (
        data.map((brand) => (
          <tr key={brand.id} className="odd:bg-gray-50 even:bg-white dark:odd:bg-dark-odd-table dark:even:bg-dark-even-table">
            <td className="p-3 text-center text-gray-800 dark:text-gray-200">{brand.brandName}</td>
            <td className="p-3 text-center text-gray-800 dark:text-gray-200">{brand.founded}</td>
            <td className="p-3 text-center text-gray-800 dark:text-gray-200">{brand.country}</td>
            <td className="p-3 text-center text-gray-800 dark:text-gray-200">{brand.industry}</td>
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

