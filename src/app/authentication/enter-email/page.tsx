"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { validateEmail } from '@/utils/auth';
import {ArrowRight} from 'iconsax-react';

function EnterEmail() {

  const [email, setEmail] = useState('');

  const emailChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const isValidEmail =validateEmail(email);

  const enterEmailHandler = async (event:any) => {
        event.preventDefault();
  };


  return (
    <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg">
    <div className="card max-w-[370px] w-full">
    <form onSubmit={enterEmailHandler} className="card-body flex flex-col gap-5 p-10" id="reset_password_enter_email_form" method="post">
     <div className="text-center">
      <h3 className="text-lg font-medium text-gray-900">
       Your Email
      </h3>
      <span className="text-2sm text-gray-700">
       Enter your email to reset password
      </span>
     </div>
     <div className="flex flex-col gap-1">
      <label className="form-label font-normal text-gray-900">
       Email
      </label>
      <input 
        className="input" 
        placeholder="email@email.com" 
        type="text" 
        value={email}
        onChange={emailChangeHandler}
        required />
        {!isValidEmail && <p className="error-text"> Your email is not correct!</p>}

     </div>
     <Link className="btn btn-primary flex justify-center grow" href="/authentication/check-email">
      Contoinue
      <ArrowRight size="16" color="#000"/>
     </Link>
    </form>
   </div>
   </div>
  )
}

export default EnterEmail