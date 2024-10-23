import HeaderSection from './headerSection';
import Footer from './footer';
import { Table } from './userTable';
import { FC } from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  date: Date;
}

interface UserTableProps {
  data: User[];
}

const User: User[] = [
  { id: 1, firstName: 'علی', lastName: 'امینی', email: 'ali.amini@gmail.com', date: new Date('2024-04-30') },
  { id: 2, firstName: 'مهدی', lastName: 'سهرابی', email: 'mehdi.sohrabi@gmail.com', date: new Date('2024-08-13') },
  { id: 3, firstName: 'پیام', lastName: 'محمدی', email: 'payam.mohamadi@gmail.com', date: new Date('2023-11-28') },
  { id: 4, firstName: 'فاطمه', lastName: 'عباسی', email: 'fateme.abasi@gmail.com', date: new Date('2023-04-19') },
  { id: 5, firstName: 'تینا', lastName: 'متین', email: 'tina.matin@gmail.com', date: new Date('2024-03-01') },
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
