import { FC } from 'react';
import ActionButtons from '../base/ActionButtons';
import { PartTableProps } from '@/types/main';


const Table: FC<PartTableProps> = ({ data, onEdit, onDelete }) => (
  <table className="min-w-[1000px] bg-white dark:bg-dark-bg-secondary rounded-[28px] shadow-lg text-right " dir="rtl">
    <thead className="bg-gray-100 dark:bg-dark-even-table">
      <tr>
        {['نوع قطعه', 'برند قطعه', 'عملیات'].map((header, index) => (
          <th key={index} className="p-3 text-center text-gray-700 dark:text-gray-300">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.length > 0 ? (
        data.map((part) => (
          <tr key={part.id} className="odd:bg-gray-50 even:bg-white dark:odd:bg-dark-odd-table dark:even:bg-dark-even-table">
            <td className="p-3 text-center text-gray-800 dark:text-gray-200">{part.partType}</td>
            <td className="p-3 text-center text-gray-800 dark:text-gray-200">{part.partBrand}</td>
            <td className="p-3 flex justify-center items-center gap-4">
              <ActionButtons 
                onEdit={() => onEdit(part)} 
                onDelete={() => onDelete(part)} 
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

