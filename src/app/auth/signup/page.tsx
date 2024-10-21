"use client"
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { validateEmail, validatePassword } from '@/utils/auth';
import { Eye, EyeSlash } from 'iconsax-react';
import './../style.css';
import {RepoFactory} from '@/BaseRepository/Factory';


function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ email: false, password: false, confirmPassword: false, general: false });
    const [loading, setLoading] = useState(false);

    const authRepository = RepoFactory.get("auth");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // تغییرات ورودی‌ها
    const emailChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        setErrors((prev) => ({ ...prev, email: false, general: false }));
    };

    const passwordChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
        setErrors((prev) => ({ ...prev, password: false, general: false }));
    };

    const confirmPasswordChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setConfirmPassword(e.currentTarget.value);
        setErrors((prev) => ({ ...prev, confirmPassword: false, general: false }));
    };

    // هندلر ثبت‌نام
    const signupHandler = async (event: any) => {
        event.preventDefault();
        setLoading(true);

        const isValidEmail = validateEmail(email);
        const isValidPassword = validatePassword(password);
        const passwordsMatch = password === confirmPassword;

        setErrors({
            email: !isValidEmail,
            password: !isValidPassword,
            confirmPassword: !passwordsMatch,
            general: false,
        });

        if (isValidEmail && isValidPassword && passwordsMatch) {
            try {
                await authRepository.signUp(email, password);

                alert('Password has been reset successfully!');
                window.location.href ='/auth/signin';
            } catch (error) {
                setErrors((prev) => ({ ...prev, general: true }));
            }
        }

        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center h-lvh grow bg-center bg-no-repeat page-bg">
            <div className="card max-w-[370px] w-full">
                <form onSubmit={signupHandler} className="card-body flex flex-col gap-5 p-10" id="sign_up_form">
                    <div className="text-center mb-2.5">
                        <h3 className="text-lg font-medium text-gray-900 leading-none mb-2.5">Sign up</h3>
                        <div className="flex items-center justify-center font-medium">
                            <span className="text-2sm text-gray-700 me-1.5">Already have an account?</span>
                            <Link className="text-2sm link" href="/auth/signin/">Sign in</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="form-label font-normal text-gray-900">Email</label>
                        <input
                            className="input"
                            placeholder="email@email.com"
                            type="email"
                            value={email}
                            onChange={emailChangeHandler}
                            required
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                       
                    </div>
                    {errors.email && <p className="error-text">Your email is not correct!</p>}

                    <div className="flex flex-col gap-1">
                        <label className="form-label font-normal text-gray-900">Password</label>
                        <div className="input">
                            <input
                                name="user_password"
                                placeholder="Enter Password"
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
                        {errors.password && <p className="error-text">Your password is not valid!</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="form-label font-normal text-gray-900">Confirm Password</label>
                        <div className="input">
                            <input
                                name="confirm_password"
                                placeholder="Re-enter Password"
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
                        {errors.confirmPassword && <p className="error-text">Passwords do not match!</p>}
                    </div>

                    {errors.general && <p className="error-text">An error occurred during sign-up. Please try again.</p>}

                    <label className="checkbox-group">
                        <input className="checkbox checkbox-sm" name="check" type="checkbox" value="1" />
                        <span className="checkbox-label">I accept <Link className="text-2sm link" href="#">Terms & Conditions</Link></span>
                    </label>

                    <button type="submit" className={`btn btn-primary flex justify-center grow ${loading ? 'loading' : ''}`} disabled={loading}>
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Signup;
