import React, { useState, useEffect } from "react";
import { CloseCircle, AddCircle, Edit2 } from "iconsax-react";
import { UserFormProps, User } from '@/types/main';
import "./style/userForm.css";


const UserForm: React.FC<UserFormProps> = ({ user, onClose, onSave, mode }) => {
  const [formData, setFormData] = useState<User>({
    id: user?.id || 0,
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    date: user?.date || new Date(),
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      setFormData({
        id: user?.id || 0,
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.email || '',
        date: user?.date || new Date(),
      });
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { firstName, lastName, email } = formData;
    if (!firstName || !lastName || !email) {
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
            <div className="text-lg font-semibold">{mode === 'add' ? 'افزودن کاربر جدید' : 'ویرایش اطلاعات کاربر'}</div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-row gap-4 justify-center items-center">
            <div className="flex-col justify-center items-end gap-7 inline-flex">
              <label className="label dark:text-gray-100">نام</label>
              <label className="label dark:text-gray-100">نام خانوادگی</label>
              <label className="label dark:text-gray-100">ایمیل</label>
            </div>

            <div className="p-3 flex-col justify-center items-center gap-7 inline-flex">
              {['firstName', 'lastName', 'email'].map((field, index) => (
                <div key={index} className="bg-light-bg-primary dark:bg-dark-bg-primary rounded-xl justify-between items-center gap-2 inline-flex">
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    placeholder={`${
                      field === 'firstName' ? 'نام' :
                      field === 'lastName' ? 'نام خانوادگی' : 
                      'ایمیل'
                    }`}
                    value={formData[field as keyof User]}
                    onChange={handleChange}
                    className="grow shrink basis-0 text-right text-black text-md font-normal bg-light-bg-primary dark:bg-dark-bg-secondary w-full border-none outline-none focus:ring-0 "
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

export default UserForm;
