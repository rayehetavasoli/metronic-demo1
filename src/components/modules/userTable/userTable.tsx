import { FC } from 'react';
import ActionButtons from './actionButtons';

interface User {
  name: string;
  family: string;
  email: string;
  date: Date;
}

interface UserTableProps {
  data: User[];
}

const users: User[] = [
  { name: 'علی', family: 'امینی', email: 'ali.amini@gmail.com', date: new Date('2024-04-30') },
  { name: 'مهدی', family: 'سهرابی', email: 'mehdi.sohrabi@gmail.com', date: new Date('2024-08-13') },
  { name: 'پیام', family: 'محمدی', email: 'payam.mohamadi@gmail.com', date: new Date('2023-11-28') },
  { name: 'فاطمه', family: 'عباسی', email: 'fateme.abasi@gmail.com', date: new Date('2023-04-19') },
  { name: 'تینا', family: 'متین', email: 'tina.matin@gmail.com', date: new Date('2024-03-01') },
];

const Table: FC<UserTableProps> = ({ data }) => (
  <table className="min-w-full bg-white rounded-[28px] shadow-lg text-right" dir="rtl">
    <thead className="bg-gray-100">
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
        data.map((user, index) => (
          <tr key={index} className="odd:bg-gray-50 even:bg-white gap-3">
            <td className="p-3 text-center">{user.name}</td>
            <td className="p-3 text-center">{user.family}</td>
            <td className="p-3 text-center">{user.email}</td>
            <td className="p-3 text-center">{user.date.toLocaleDateString('fa-IR')}</td>
            <td className="p-3 flex justify-center items-center gap-4">
              <ActionButtons />
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

export { Table, users };
