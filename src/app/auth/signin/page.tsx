"use client"
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { validateEmail , validatePassword } from '@/utils/auth';
import { Eye , EyeSlash } from 'iconsax-react';
import {RepoFactory} from '@/BaseRepository/Factory';
import './../style.css';

function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ email: false, password: false, general: false });
    const [loading, setLoading] = useState(false);

    const authRepository = RepoFactory.get("auth");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const emailChangeHandler = (e:React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        setErrors((prev) => ({ ...prev, email: false, general: false }));
    };

    const passwordChangeHandler = (e:React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
        setErrors((prev) => ({ ...prev, password: false, general: false }));
    };

    const signinHandler = async (event:any) => {
        event.preventDefault();
        setLoading(true);
        const isValidEmail = validateEmail(email);
        const isValidPassword = validatePassword(password);
        setErrors({
            email: !isValidEmail,
            password: !isValidPassword,
            general: false,
        });

        if (isValidEmail && isValidPassword) {
            try {
                // اینجا کد ورود شما قرار می‌گیرد
                // به عنوان مثال:
                await authRepository.signIn(email, password);
                
                // اگر ورود موفقیت‌آمیز بود:
                
                alert('Password has been reset successfully!');
                window.location.href = '/dashboard';
                // به صفحه داشبورد هدایت کنید
               //Router.push('/dashboard');
            } catch (error) {
                setErrors((prev) => ({ ...prev, general: true }));
            }
        }

        setLoading(false);
    };



  return (
    <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg h-lvh">
    <div className="card max-w-[370px] w-full">
        <form onSubmit={signinHandler} className="card-body flex flex-col gap-5 p-10" id="sign_in_form">
            <div className="text-center mb-2.5">
                <h3 className="text-lg font-medium text-gray-900 leading-none mb-2.5">
                    Sign in
                </h3>
                <div className="flex items-center justify-center font-medium">
                    <span className="text-2sm text-gray-700 me-1.5">
                     Need an account?
                     </span>
                    <Link className="text-2sm link" href="/auth/signup">
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
                    type="email" 
                    value={email}
                    onChange={emailChangeHandler}
                    required 
                    aria-invalid={errors.email ? "true" : "false"}/>
                   {errors.email && <p className="error-text">Your email is not correct!</p>}

            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-1">
                    <label className="form-label font-normal text-gray-900">
                    Password
                    </label>
                    <Link className="text-2sm link shrink-0" href="/auth/enter-email/">
                        Forgot Password?
                    </Link>
                </div>
                <div className="input" >
                    <input 
                        name="user_password" 
                        placeholder="Enter Password" 
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={passwordChangeHandler} 
                        required
                        aria-invalid={errors.password ? "true" : "false"}/>
                    <button type="button" onClick={togglePasswordVisibility} className="btn btn-icon">
                            {showPassword ? <Eye className="ki-filled ki-eye text-gray-500" size="18" /> : <EyeSlash className="ki-filled ki-eye-slash text-gray-500" size="18" />}
                    </button>
                    {errors.password && <p className="error-text">Your password is not valid!</p>}
                </div>
            </div>
            {errors.general && <p className="error-text">An error occurred during sign-in. Please try again.</p>}

            <label className="checkbox-group">
                 <input className="checkbox checkbox-sm" name="check" type="checkbox" value="1"/>
                    <span className="checkbox-label">
                      Remember me
                    </span>
            </label>

            <button type="submit" className={`btn btn-primary flex justify-center grow ${loading ? 'loading' : ''}`} disabled={loading}>
                        {loading ? 'Signing In...' : 'Sign In'}
            </button>

        </form>
        
    </div>
    </div>
  )
}

export default Signin;