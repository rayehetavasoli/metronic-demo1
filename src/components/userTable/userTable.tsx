import { FC } from 'react';
import ActionButtons from './actionButtons';
import {users} from '@/db/main';
import { UserTableProps } from '@/types/main';


const Table: FC<UserTableProps> = ({ data, onEdit, onDelete }) => (
  <table className="min-w-full bg-white dark:bg-dark-bg-secondary rounded-[28px] shadow-lg text-right" dir="rtl">
    <thead className="bg-gray-100 dark:bg-gray-900">
      <tr>
        {['نام', 'نام خانوادگی', 'ایمیل', 'تاریخ ثبت', 'عملیات'].map((header, index) => (
          <th key={index} className="p-3 text-center">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.length > 0 ? (
        data.map((user) => (
          <tr key={user.id} className="odd:bg-gray-50 even:bg-white dark:odd:bg-gray-900 dark:even:bg-dark-bg-primary">
            <td className="p-3 text-center">{user.firstName}</td>
            <td className="p-3 text-center">{user.lastName}</td>
            <td className="p-3 text-center">{user.email}</td>
            <td className="p-3 text-center">{user.date.toLocaleDateString('fa-IR')}</td>
            <td className="p-3 flex justify-center items-center gap-4">
              <ActionButtons 
                onEdit={() => onEdit(user)} 
                onDelete={() => onDelete(user)} 
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

export { Table , users };

