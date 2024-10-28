import { CloseCircle, Edit2 } from "iconsax-react";
import React, { useState } from "react";
import { Brand } from '@/types';
import {EditBrandProps} from '@/types';


const EditBrand: React.FC<EditBrandProps> = ({ brand, onClose, onUpdate }) => {

  const [brandName, setBrandName] = useState<string>(brand.brandName);
  const [founded, setFounded] = useState<string>(brand.founded);
  const [country, setCountry] = useState<string>(brand.country);
  const [industry, setIndustry] = useState<string>(brand.industry);

  const [error, setError] = useState<string | null>(null);

  const handleUpdate = () => {
    if (!brandName || !founded || !country || !industry) {
      setError("تمامی فیلدها الزامی است");
      return;
    }

    const updatedBrand: Brand = { ...brand, brandName, founded, country, industry };
    onUpdate(updatedBrand); 
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
          <div className="text-center text-black text-lg font-semibold px-5 justify-center items-center inline-flex">ویرایش اطلاعات برند</div>
        <form onSubmit={(e) => e.preventDefault()} className="justify-center items-center gap-4 flex flex-row">
       
         <div className="flex-col justify-center items-end gap-7 inline-flex">
          <div className="text-center text-black text-md  py-2 justify-center items-center inline-flex">نام</div>
          <div className="text-center text-black text-md  py-2 justify-center items-center inline-flex">سال تاسیس</div>
          <div className="text-center text-black text-md py-2 justify-center items-center  inline-flex">کشور</div>
          <div className="text-center text-black text-md py-2 justify-center items-center  inline-flex">صنعت</div>
        </div>

        <div className="p-3 flex-col justify-center items-center gap-7 inline-flex"> 
          <div className="w-full px-3 py-2 bg-[#f4f4f4] rounded-xl justify-between items-center gap-2 inline-flex">
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="grow shrink basis-0 text-right text-black text-md font-normal bg-[#f4f4f4] w-full border-none outline-none focus:ring-0 "
            />
            <Edit2 className="w-5 h-5 text-gray-500"/>
            </div>
          

            <div className="w-full px-3 py-2 bg-[#f4f4f4] rounded-xl justify-between items-center gap-2 inline-flex">
            <input
              type="text"
              value={founded}
              onChange={(e) => setFounded(e.target.value)}
              className="grow shrink basis-0 text-right text-black text-md font-normal bg-[#f4f4f4] w-full border-none outline-none focus:ring-0 "
              
            />
            <Edit2 className="w-5 h-5 text-gray-500"/>
            </div>
    
            <div className="w-full px-3 py-2 bg-[#f4f4f4] rounded-xl justify-between items-center gap-2 inline-flex">
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="grow shrink basis-0 text-right text-black text-md font-normal bg-[#f4f4f4] w-full border-none outline-none focus:ring-0 "
            />
            <Edit2 className="w-5 h-5 text-gray-500"/>
            
          </div>

          <div className="w-full px-3 py-2 bg-[#f4f4f4] rounded-xl justify-between items-center gap-2 inline-flex">
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="grow shrink basis-0 text-right text-black text-md font-normal bg-[#f4f4f4] w-full border-none outline-none focus:ring-0 "
            />
            <Edit2 className="w-5 h-5 text-gray-500"/>
            
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

export default EditBrand;
