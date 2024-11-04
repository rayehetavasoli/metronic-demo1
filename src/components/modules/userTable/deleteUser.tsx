import React from 'react';
import { DeleteUserProps } from '@/types';
import { Warning2 } from 'iconsax-react';

const DeleteUser: React.FC<DeleteUserProps> = ({ user, onCancel, onDelete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className=" px-7 py-6 bg-white rounded-[32px] shadow flex flex-col justify-center items-center max-w-md" dir='rtl'>
      <div className="flex flex-col justify-center items-center gap-8">
        <Warning2 className='w-10 h-10 justify-center items-center inline-flex ' color='#f8285a'/>
        <h2 className="text-black text-lg font-medium text-right">
          در صورت تائید کابر {user.firstName} {user.lastName} به طور کامل از لیست کاربران حذف می شود، آیا مطمئن هستید؟
        </h2>
        
        <div className="self-stretch flex justify-center items-center gap-4">
          
            <button 
            className="px-4 py-2 bg-[#f8285a] rounded-[20px] text-white text-md font-medium"
            onClick={onDelete}
          >
            تائید و حذف
          </button>
          <button 
            className="px-4 py-2 bg-white border border-black rounded-[20px] text-[#5f5f5f] text-md font-medium"
            onClick={onCancel}
          >
            لغو
          </button>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default DeleteUser;
