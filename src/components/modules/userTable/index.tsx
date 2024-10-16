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
    { name: 'علی', family: 'امینی', email: 'ali.amini@gmail.com', date: 1403/2/11 },
    { name: 'مهدی', family: 'سهرابی', email: 'mehdi.sohrabi@gmail.com', date: 1403/5/23 },
    { name: 'پیام', family: 'محمدی', email: 'payam.mohamadi@gmail.com', date: 1402/9/7},
    { name: 'فاطمه', family: 'عباسی', email: 'fateme.abasi@gmail.com', date: 1402/2/30 },
    { name: 'تینا', family: 'متین', email: 'tina.matin@gmail.com', date: 1402/12/11 },
  ];
  
const UserTable: FC<UserTableProps> = ({ data }) => {
  return (
    <div className="p-8 bg-gray-50 rounded-3xl shadow-lg w-full mx-20 ">
      <HeaderSection />
      <Table data={data} />
      <Footer />
    </div>
  );
};


export {UserTable};
