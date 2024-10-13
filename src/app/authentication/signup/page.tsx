"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { validateEmail , validatePassword } from '@/utils/auth';
//import {RepoFactory} from '@/BaseRepository/Factory';



function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
   

    //const authRepository = RepoFactory.get("auth");

    // change Handeler !!
    const emailChangeHandler = (e:React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
      };
      const passwordChangeHandler = (e:React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
      };
      const confirmPasswordChangeHandler = (e:React.FormEvent<HTMLInputElement>) => {
        setConfirmPassword(e.currentTarget.value);
      };
      const signupHandler = async (event:any) => {
        event.preventDefault();
      }

      // validation !!
      const isValidEmail =validateEmail(email);
      const isValidPassword =validatePassword(password);


  return (
    <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg">
    <div className="card max-w-[370px] w-full">
        <form onSubmit={signupHandler} className="card-body flex flex-col gap-5 p-10" id="sign_in_form" data-gtm-form-interact-id="0">
            <div className="text-center mb-2.5">
                <h3 className="text-lg font-medium text-gray-900 leading-none mb-2.5">
                    Sign up
                </h3>
                <div className="flex items-center justify-center font-medium">
                    <span className="text-2sm text-gray-700 me-1.5">
                     Need an account?
                     </span>
                    <Link className="text-2sm link" href="/authentication/signin/">
                     Sign in
                    </Link>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <span className="border-t border-gray-200 w-full">
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
                required
                />
                {!isValidEmail && <p className="error-text"> Your email is not correct!</p>}
            </div>

            <div className="flex flex-col gap-1">
                <label className="form-label font-normal text-gray-900">
                 Password
                </label>
                <div className="input" data-toggle-password="true">
                    <input 
                    name="user_password" 
                    placeholder="Enter Password" 
                    type="password" 
                    value={password}
                    onChange={passwordChangeHandler}
                    required/>
                    <button className="btn btn-icon" data-toggle-password-trigger="true" type="button">
                    <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden">
                    </i>
                    <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block">
                    </i>
                    </button>
                    {!isValidPassword && <p className="error-text"> Your password is not valid!</p>}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <label className="form-label font-normal text-gray-900">
                    Confirm Password
                </label>
                <div className="input" data-toggle-password="true">
                    <input 
                    name="user_password" 
                    placeholder="Re-enter Password" 
                    type="password"
                    value={confirmPassword}
                    onChange={confirmPasswordChangeHandler}
                    required 
                     />
                    <button className="btn btn-icon" data-toggle-password-trigger="true" type="button">
                        <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden">
                        </i>
                        <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block">
                        </i>
                    </button>
                    {(password !== confirmPassword) && <p className="error-text"> Your password and confirm password are not equal !</p>}
                </div>
            </div>

            <label className="checkbox-group">
                 <input className="checkbox checkbox-sm" name="check" type="checkbox" value="1"/>
                 <span className="checkbox-label">
                    I accept
                <Link className="text-2sm link" href="#">
                 Terms & Conditions
                </Link>
                </span>
            </label>

            <button className="btn btn-primary flex justify-center grow">
                Sign Up
             </button>

        </form>
    </div>
    </div>
  )
}

export default Signup