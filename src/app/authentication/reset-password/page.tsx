"use client"
import React from 'react';
import { useState } from 'react';
import { validatePassword } from '@/utils/auth';




function resetPassword() {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const passwordChangeHandler = (e:React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const confirmPasswordChangeHandler = (e:React.FormEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const isValidPassword =validatePassword(password);
  const resetPasswordHandeler = async (event:any) => {
    event.preventDefault();
    setShowErrors(true);
  }

  
  return (
    <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg h-lvh">
    <div className="card max-w-[370px] w-full">
    <form onSubmit={resetPasswordHandeler} className="card-body flex flex-col gap-5 p-10" id="reset_password_change_password_form" method="post">
     <div className="text-center">
      <h3 className="text-lg font-medium text-gray-900">
       Reset Password
      </h3>
      <span className="text-2sm text-gray-700">
       Enter your new password
      </span>
     </div>
     <div className="flex flex-col gap-1">
      <label className="form-label text-gray-900">
       New Password
      </label>
      <label className="input" >
      <input 
        name="user_password" 
        placeholder="Enter Password" 
        type="password"
        value={password}
        onChange={passwordChangeHandler}
        required 
         />       
        <div className="btn btn-icon" data-toggle-password-trigger="true">
        <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden">
        </i>
        <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block">
        </i>
       </div>
      </label>
      {showErrors && !isValidPassword && <p className="error-text"> Your password is not valid!</p>}
     </div>
     <div className="flex flex-col gap-1">
      <label className="form-label font-normal text-gray-900">
       Confirm New Password
      </label>
      <label className="input">
      <input 
        name="user_password" 
        placeholder="Re-enter Password" 
        type="password"
        value={confirmPassword}
        onChange={confirmPasswordChangeHandler}
        required 
         />
      </label>
      {showErrors && (password !== confirmPassword) && <p className="error-text"> Your password and confirm password are not equal !</p>}
     </div>
     <button className="btn btn-primary flex justify-center grow" >
      Submit
     </button>
    </form>
   </div>
   </div>
  )
}

export default resetPassword