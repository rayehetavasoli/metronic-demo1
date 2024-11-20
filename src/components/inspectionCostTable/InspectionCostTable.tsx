import { FC } from 'react';
import ActionButtons from '../base/ActionButtons';
import { InspectionCostTableProps } from '@/types/main';


const Table: FC<InspectionCostTableProps> = ({ data, onEdit, onDelete }) => (
  <table className="min-w-[1000px] bg-white dark:bg-dark-bg-secondary rounded-[28px] shadow-lg text-right " dir="rtl">
    <thead className="bg-gray-100 dark:bg-dark-even-table">
      <tr>
        {['نوع بازرسی', 'هزینه بازرسی', 'عملیات'].map((header, index) => (
          <th key={index} className="p-3 text-center text-gray-700 dark:text-gray-300">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.length > 0 ? (
        data.map((inspectionCost) => (
          <tr key={inspectionCost.id} className="odd:bg-gray-50 even:bg-white dark:odd:bg-dark-odd-table dark:even:bg-dark-even-table">
            <td className="p-3 text-center text-gray-800 dark:text-gray-200">{inspectionCost.inspectionType}</td>
            <td className="p-3 text-center text-gray-800 dark:text-gray-200">{inspectionCost.cost}</td>
            <td className="p-3 flex justify-center items-center gap-4">
              <ActionButtons 
                onEdit={() => onEdit(inspectionCost)} 
                onDelete={() => onDelete(inspectionCost)} 
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

