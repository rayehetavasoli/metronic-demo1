import React from 'react';
import { DeletePartProps } from '@/types/main';
import { Warning2 } from 'iconsax-react';

const DeletePart: React.FC<DeletePartProps> = ({ part, onCancel, onDelete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className=" px-7 py-6 bg-white dark:bg-dark-bg-primary rounded-[32px] shadow flex flex-col justify-center items-center max-w-md" dir='rtl'>
      <div className="flex flex-col justify-center items-center gap-8">
        <Warning2 className='w-10 h-10 justify-center items-center inline-flex' color='#f8285a'/>
        <h2 className="text-black dark:text-dark-text-primary text-lg font-medium text-right">
          در صورت تائید برند {part.partType}{part.partBrand} به طور کامل از لیست برندها حذف می شود، آیا مطمئن هستید؟
        </h2>

        <div className="self-stretch flex justify-center items-center gap-4">
            <button 
            className="px-4 py-2 bg-red-primary rounded-[20px] text-white text-md font-medium"
            onClick={onDelete}
          >
            تائید و حذف
          </button>
          <button 
            className="px-4 py-2 bg-white dark:bg-dark-bg-secondary border border-black dark:border-dark-text-primary rounded-[20px] text-dark-text-primary text-md font-medium"
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

export default DeletePart;
