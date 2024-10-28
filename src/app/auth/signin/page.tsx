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
                await authRepository.signIn(email, password);
                
                alert(' خوش آمدید!');
                window.location.href = '/dashboard';
            } catch (error) {
                setErrors((prev) => ({ ...prev, general: true }));
            }
        }

        setLoading(false);
    };



  return (
     <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg h-lvh" dir='rtl'>
      <div className="card max-w-[370px] w-full">
        <form onSubmit={signinHandler} className="card-body flex flex-col gap-5 p-10">
            <div className="text-center mb-2.5">
                <h3 className="text-lg font-medium text-gray-900 leading-none mb-2.5">
                    ورود
                </h3>
                <div className="flex items-center justify-center font-medium">
                    <span className="text-2sm text-gray-700 me-1.5">
                     نیاز به حساب کابری دارید؟
                     </span>
                    <Link className="text-2sm link" href="/auth/signup">
                     ثبت نام
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <label className="form-label font-normal text-gray-900">
                 ایمیل
                </label>
                <input 
                    className="input"
                    placeholder="email@email.com" 
                    type="email" 
                    value={email}
                    onChange={emailChangeHandler}
                    required 
                    aria-invalid={errors.email ? "true" : "false"}/>
                   {errors.email && <p className="error-text">ایمیل وارد شده صحیح نمی باشد!</p>}

            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-1">
                    <label className="form-label font-normal text-gray-900">
                    رمز عبور
                    </label>
                    <Link className="text-2sm link shrink-0" href="/auth/enter-email/">
                        فراموشی رمز عبور ؟
                    </Link>
                </div>
                <div className="input" > 
                    <button type="button" onClick={togglePasswordVisibility} className="btn btn-icon">
                            {showPassword ? <Eye className="ki-filled ki-eye text-gray-500" size="18" /> : <EyeSlash className="ki-filled ki-eye-slash text-gray-500" size="18" />}
                    </button>
                    <input 
                        name="user_password" 
                        placeholder="رمز عبور را وارد کنید" 
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={passwordChangeHandler} 
                        required
                        aria-invalid={errors.password ? "true" : "false"}/>
                   
                    
                </div>
                {errors.password && <p className="error-text">رمز عبور وارد شده معتبر نمی باشد!</p>}
            </div>
            {errors.general && <p className="error-text">مشکلی در ورود پیش آمده است. لطفا دوباره تلاش کنید!</p>}

            <label className="checkbox-group">
                 <input className="checkbox checkbox-sm" name="check" type="checkbox" value="1"/>
                    <span className="checkbox-label">
                     مرا به خاطر بسپار
                    </span>
            </label>

            <button type="submit" className={`btn btn-primary flex justify-center grow ${loading ? 'loading' : ''}`} disabled={loading}>
                        {loading ? 'ورود... ': 'ورود'}
            </button>

        </form>
        
        </div>
    </div>
  )
}


export default Signin;