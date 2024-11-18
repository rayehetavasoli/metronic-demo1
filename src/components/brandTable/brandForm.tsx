import React, { useState, useEffect } from "react";
import { CloseCircle, AddCircle, Edit2 } from "iconsax-react";
import { BrandFormProps, Brand } from '@/types/main';
import "./style/brandForm.css"

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
      <div className="p-5 bg-white dark:bg-dark-bg-primary rounded-[32px] shadow flex-col justify-center items-end inline-flex gap-3">
      <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400 flex justify-between items-center">
      <CloseCircle className="w-6 h-6 relative justify-end items-start inline-flex" />
      </button>
        {error && <p className="error-text">{error}</p>}

        <div className="flex-col justify-center items-start gap-5 inline-flex">
          <div className="self-stretch px-2 justify-start items-center gap-1 inline-flex">
            {mode === 'add' ? <AddCircle className="w-5 h-5 text-gray-900 dark:text-gray-300" /> : <Edit2 className="w-5 h-5 text-gray-900 dark:text-gray-300" />}
            <div className="text-lg font-semibold dark:text-gray-100">{mode === 'add' ? 'افزودن برند جدید' : 'ویرایش اطلاعات برند'}</div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-row gap-4 justify-center items-center">
            <div className="flex-col justify-center items-end gap-7 inline-flex">
              <label className="label dark:text-gray-100">نام</label>
              <label className="label dark:text-gray-100">سال تاسیس</label>
              <label className="label dark:text-gray-100">کشور</label>
              <label className="label dark:text-gray-100">صنعت</label>
            </div>

            <div className="p-3 flex-col justify-center items-center gap-7 inline-flex"> 
              {['brandName', 'founded', 'country', 'industry'].map((field, index) => (
                <div key={index} className="bg-light-bg-primary dark:bg-dark-bg-primary rounded-xl justify-between items-center gap-2 inline-flex w-full px-3 py-2">
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
                    className="grow shrink basis-0 text-right text-black dark:text-gray-100 text-md font-normal bg-light-bg-primary dark:bg-dark-even-table w-full border-none rounded-[6px] outline-none focus:ring-0 "
                  />
                </div>
              ))}
            </div>
          </form>

          <button
            type="button"
            onClick={handleSubmit}
            className="text-center text-white text-md font-medium px-5 py-2 bg-blue-primary rounded-2xl justify-center items-center inline-flex"
          >
            {mode === 'add' ? 'تائید و اضافه' : 'بروزرسانی'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandForm;
