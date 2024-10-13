"use client"
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { validateEmail , validatePassword } from '@/utils/auth';
//import {RepoFactory} from '@/BaseRepository/Factory';

function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //const authRepository = RepoFactory.get("auth");

    // change Handeler !!
    const emailChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
      };
      const passwordChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
      };

      // validation !!
      const isValidEmail =validateEmail(email);
      const isValidPassword =validatePassword(password);
     
      const signinHandler = async (event:any) => {
        event.preventDefault();
      }





  return (
    <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg">
    <div className="card max-w-[370px] w-full">
        <form onSubmit={signinHandler} className="card-body flex flex-col gap-5 p-10" id="sign_in_form" data-gtm-form-interact-id="0">
            <div className="text-center mb-2.5">
                <h3 className="text-lg font-medium text-gray-900 leading-none mb-2.5">
                    Sign in
                </h3>
                <div className="flex items-center justify-center font-medium">
                    <span className="text-2sm text-gray-700 me-1.5">
                     Need an account?
                     </span>
                    <Link className="text-2sm link" href="/authentication/signup">
                     Sign up
                    </Link>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <span className="border-t border-gray-200 w-full">
                </span>
                <span className="text-2xs text-gray-500 font-medium uppercase">
                    Or
                </span>
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
                    required />
                    {!isValidEmail && <p className="error-text"> Your email is not correct!</p>}

            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-1">
                    <label className="form-label font-normal text-gray-900">
                    Password
                    </label>
                    <Link className="text-2sm link shrink-0" href="/authentication/enter-email/">
                        Forgot Password?
                    </Link>
                </div>
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

            <label className="checkbox-group">
                 <input className="checkbox checkbox-sm" name="check" type="checkbox" value="1"/>
                    <span className="checkbox-label">
                      Remember me
                    </span>
            </label>

            <button className="btn btn-primary flex justify-center grow">
                Sign In
             </button>

        </form>
    </div>
    </div>
  )
}

export default Signin;