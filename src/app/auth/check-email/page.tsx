"use client";
import React from 'react';
import Link from 'next/link';
import './../style.css';


const CheckEmail= () => {
  const email = localStorage.getItem('userEmail');
  return (
    <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg h-lvh" dir='rtl'>
      <div className="card max-w-[440px] w-full py-5">
        <div className="card-body p-10">
          <h3 className="text-lg font-medium text-gray-900 text-center mb-3 dark:text-gray-300">
            ایمیل خود را چک کنید
          </h3>
          <div className="text-sm text-center text-gray-700 mb-7.5">
            لطفا ایمیل خود را چک کنید  &nbsp;
            <Link className="text-sm text-gray-800 font-medium hover:text-primary-active" href="#">
              {email}
            </Link>
            <br />
             تا رمز شما را بازیابی کنیم. باتشکر
          </div>
          <div className="flex justify-center m-5">
            <Link className="btn btn-primary flex justify-center" href="/auth/reset-password/">
              رد کردن
            </Link>
          </div>
          <div className="flex items-center justify-center gap-1">
            <span className="text-xs text-gray-600">
              ایمیل را دریافت نکردید؟
            </span>
            <Link className="text-xs font-medium link" href="#">
              ارسال دوباره
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
