import React, { useState, useEffect } from "react";
import { CloseCircle, AddCircle, Edit2 } from "iconsax-react";
import { BrandFormProps, Brand } from '@/types/main';

const BrandForm: React.FC<BrandFormProps> = ({ brand, onClose, onSave, mode }) => {
  const [formData, setFormData] = useState<Brand>({
    id: brand?.id || 0,
    brandName: brand?.brandName || '',
    founded: brand?.founded || '',
    country: brand?.country || '',
    industry: brand?.industry || '',
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setFormData({
      id: brand?.id || 0,
      brandName: brand?.brandName || '',
      founded: brand?.founded || '',
      country: brand?.country || '',
      industry: brand?.industry || '',
    });
  }, [brand]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { brandName, founded, country, industry } = formData;
    if (!brandName || !founded || !country || !industry) {
      setError("تمامی فیلدها الزامی است");
      return;
    }
    onSave(formData); 
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" dir="rtl">
      <div className="p-5 bg-white rounded-[32px] shadow flex-col justify-center items-end inline-flex gap-3">
      <button onClick={onClose} className="text-gray-500 hover:text-gray-700 flex justify-between items-center">
      <CloseCircle className="w-6 h-6 relative justify-end items-start inline-flex" />
      </button>
        {error && <p className="error-text">{error}</p>}

        <div className="flex-col justify-center items-start gap-5 inline-flex">
          <div className="self-stretch px-2 justify-start items-center gap-1 inline-flex">
            {mode === 'add' ? <AddCircle className="w-5 h-5 text-gray-900" /> : <Edit2 className="w-5 h-5 text-gray-900" />}
            <div className="text-lg font-semibold">{mode === 'add' ? 'افزودن برند جدید' : 'ویرایش اطلاعات برند'}</div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-row gap-4 justify-center items-center">
            <div className="flex-col justify-center items-end gap-7 inline-flex">
              <label className="text-center text-black text-md  py-2 justify-center items-center inline-flex">نام</label>
              <label className="text-center text-black text-md  py-2 justify-center items-center inline-flex">سال تاسیس</label>
              <label className="text-center text-black text-md  py-2 justify-center items-center inline-flex">کشور</label>
              <label className="text-center text-black text-md  py-2 justify-center items-center inline-flex">صنعت</label>
            </div>

            <div className="p-3 flex-col justify-center items-center gap-7 inline-flex"> 
              {['brandName', 'founded', 'country', 'industry'].map((field, index) => (
                <div key={index} className="w-full px-3 py-2 bg-[#f4f4f4] rounded-xl justify-between items-center gap-2 inline-flex">
                  <input
                    type="text"
                    name={field}
                    placeholder={`${
                      field === 'brandName' ? 'نام برند' : 
                      field === 'founded' ? 'سال تاسیس' : 
                      field === 'country' ? 'کشور سازنده' : 
                      'نوع صنعت'
                    }`}
                    value={formData[field as keyof Brand]}
                    onChange={handleChange}
                    className="grow shrink basis-0 text-right text-black text-md font-normal bg-[#f4f4f4] w-full border-none outline-none focus:ring-0 "
                  />
                </div>
              ))}
            </div>
          </form>

          <button
            type="button"
            onClick={handleSubmit}
            className="text-center text-white text-md font-medium px-5 py-2 bg-[#1b84ff] rounded-2xl justify-center items-center inline-flex"
          >
            {mode === 'add' ? 'تائید و اضافه' : 'بروزرسانی'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandForm;