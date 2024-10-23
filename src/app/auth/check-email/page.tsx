"use client";
import React from 'react';
import Link from 'next/link';
import './../style.css';


const CheckEmail= () => {
  const email = localStorage.getItem('userEmail');
  return (
    <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg h-lvh">
      <div className="card max-w-[440px] w-full py-5">
        <div className="card-body p-10">
          <h3 className="text-lg font-medium text-gray-900 text-center mb-3">
            Check your email
          </h3>
          <div className="text-sm text-center text-gray-700 mb-7.5">
            Please click the link sent to your email &nbsp;
            <Link className="text-sm text-gray-800 font-medium hover:text-primary-active" href="#">
              {email}
            </Link>
            <br />
             to reset your password. Thank you.
          </div>
          <div className="flex justify-center m-5">
            <Link className="btn btn-primary flex justify-center" href="/auth/reset-password/">
              Skip for now
            </Link>
          </div>
          <div className="flex items-center justify-center gap-1">
            <span className="text-xs text-gray-600">
              Didn’t receive an email?
            </span>
            <Link className="text-xs font-medium link" href="#">
              Resend
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
