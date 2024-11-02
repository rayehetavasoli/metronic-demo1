import { CloseCircle, Edit2 } from "iconsax-react";
import React, { useState } from "react";
import { User } from '@/types';
import {EditUserProps} from '@/types';


const EditUser: React.FC<EditUserProps> = ({ user, onClose, onUpdate }) => {

  const [firstName, setFirstName] = useState<string>(user.firstName);
  const [lastName, setLastName] = useState<string>(user.lastName);
  const [email, setEmail] = useState<string>(user.email);
  const [error, setError] = useState<string | null>(null);

  const handleUpdate = () => {
    if (!firstName || !lastName || !email) {
      setError("تمامی فیلدها الزامی است");
      return;
    }

    const updatedUser: User = { ...user, firstName, lastName, email };
    onUpdate(updatedUser); 
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" dir="rtl">
      <div className="p-5 bg-white rounded-[32px] shadow flex-col justify-center items-end inline-flex gap-3">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 flex justify-between items-center">
          <CloseCircle className="w-6 h-6 relative justify-end items-start inline-flex" />
        </button>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex-col justify-center items-start gap-5 inline-flex">
          <div className="self-stretch px-2 justify-start items-center gap-1 inline-flex ">
            <Edit2 className="w-5 h-5 text-gray-900 flex justify-center items-center inline-flex"/>
            <div className="text-center text-black text-lg font-semibold justify-center items-center inline-flex">ویرایش اطلاعات کابر</div>
          </div>
        <form onSubmit={(e) => e.preventDefault()} className="justify-center items-center gap-4 flex flex-row">
       
         <div className="flex-col justify-center items-end gap-7 inline-flex">
          <div className="text-center text-black text-md  py-2 justify-center items-center inline-flex">نام</div>
          <div className="text-center text-black text-md  py-2 justify-center items-center inline-flex">نام خانوادگی</div>
          <div className="text-center text-black text-md py-2 justify-center items-center gap-2 inline-flex">ایمیل</div>

        </div>
        <div className="p-3 flex-col justify-center items-center gap-7 inline-flex"> 
          <div className="w-full px-3 py-2 bg-[#f4f4f4] rounded-xl justify-between items-center gap-2 inline-flex">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="grow shrink basis-0 text-right text-black text-md font-normal bg-[#f4f4f4] w-full border-none outline-none focus:ring-0 "
            />
            </div>
          

            <div className="w-full px-3 py-2 bg-[#f4f4f4] rounded-xl justify-between items-center gap-2 inline-flex">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="grow shrink basis-0 text-right text-black text-md font-normal bg-[#f4f4f4] w-full border-none outline-none focus:ring-0 "
              
            />
            </div>
    
            <div className="w-full px-3 py-2 bg-[#f4f4f4] rounded-xl justify-between items-center gap-2 inline-flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="grow shrink basis-0 text-right text-black text-md font-normal bg-[#f4f4f4] w-full border-none outline-none focus:ring-0 "
            />            
          </div>
        </div>
        </form>

            <button
              type="button"
              onClick={handleUpdate}
              className="text-center text-white text-md font-medium px-5 py-2 bg-[#1b84ff] rounded-2xl justify-center items-center inline-flex"
            >
              بروزرسانی
            </button>
      </div>
      </div>
    </div>
  );
};

export default EditUser;
