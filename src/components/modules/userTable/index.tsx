import HeaderSection from './headerSection';
import Footer from './footer';
import { Table } from './userTable';
import { FC } from 'react';

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

const UserTable: FC<UserTableProps> = ({ data }) => {
  return (
    <div className="px-10 py-8 bg-gray-50 rounded-3xl shadow-lg w-full mx-20">
      <HeaderSection />
      <Table data={data} />
      <Footer />
    </div>
  );
};

export { UserTable };
