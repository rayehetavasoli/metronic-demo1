"use client"
import React, { useState } from 'react';
import { validatePassword } from '@/utils/auth';
import './../style.css';
import { Eye , EyeSlash } from 'iconsax-react';
import {RepoFactory} from '@/BaseRepository/Factory';


function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ password: false, confirmPassword: false, general: false });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const authRepository = RepoFactory.get("auth");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const passwordChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
        setErrors((prev) => ({ ...prev, password: false, general: false }));
    };

    const confirmPasswordChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setConfirmPassword(e.currentTarget.value);
        setErrors((prev) => ({ ...prev, confirmPassword: false, general: false }));
    };

    const resetPasswordHandler = async (event: any) => {
        event.preventDefault();
        setLoading(true);

        const isValidPassword = validatePassword(password);
        const passwordsMatch = password === confirmPassword;

        setErrors({
            password: !isValidPassword,
            confirmPassword: !passwordsMatch,
            general: false,
        });

        if (isValidPassword && passwordsMatch) {
          try {
              await authRepository.resetPassword(password);

              alert('رمز عبورتان با موفقیت تغییر یافت!');
              window.location.href ='/auth/signin';
              setPassword('');
              setConfirmPassword('');
          } catch (error) {
              setErrors((prev) => ({ ...prev, general: true }));
          }
      }

        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg h-lvh" dir='rtl'>
            <div className="card max-w-[370px] w-full">
                <form onSubmit={resetPasswordHandler} className="card-body flex flex-col gap-5 p-10" id="reset_password_change_password_form">
                    <div className="text-center">
                        <h3 className="text-lg font-medium text-gray-900">بازیابی رمز عبور</h3>
                        <span className="text-2sm text-gray-700">رمز عبور جدید را وارد کنید</span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="form-label text-gray-900">رمز عبور جدید</label>
                        <div className="input">
                           
                            <input
                                name="user_password"
                                placeholder="رمز عبور را وارد کنید"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={passwordChangeHandler}
                                required
                                aria-invalid={errors.password ? "true" : "false"}
                            />
                             <button type="button" onClick={togglePasswordVisibility} className="btn btn-icon">
                                {showPassword ? <Eye className="ki-filled ki-eye text-gray-500" size="18" /> : <EyeSlash className="ki-filled ki-eye-slash text-gray-500" size="18" />}
                            </button>
                        </div>
                        {errors.password && <p className="error-text">رمز عبور وارد شده معتبر نمی باشد!</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="form-label text-gray-900">تکرار رمز عبور</label>
                        <div className="input">
                            
                        <input
                            name="confirm_password"
                            placeholder="مجددا رمز عبور را وارد کنید"
                            type={showPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={confirmPasswordChangeHandler}
                            required
                            aria-invalid={errors.confirmPassword ? "true" : "false"}
                        />
                        <button type="button" onClick={togglePasswordVisibility} className="btn btn-icon">
                                {showPassword ? <Eye className="ki-filled ki-eye text-gray-500" size="18" /> : <EyeSlash className="ki-filled ki-eye-slash text-gray-500" size="18" />}
                            </button>
                        </div>
                        {errors.confirmPassword && <p className="error-text">رمز های وارد شده با هم مطابقت ندارد!</p>}
                    </div>

                    {errors.general && <p className="error-text"> یک مشکل در تغییر رمز عبور پیش آمده است. لطفا دوباره تلاش کنید!</p>}

                    <button type="submit" className={`btn btn-primary flex justify-center grow ${loading ? 'loading' : ''}`} disabled={loading}>
                        {loading ? 'درحال ثبت کردن...' : 'ثبت'}
                    </button>
                </form>
                
            </div>
        </div>
    );
}

export default ResetPassword;
