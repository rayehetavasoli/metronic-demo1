"use client"
import React, { useState } from 'react';
import { validateEmail } from '@/utils/auth';
import { ArrowRight } from 'iconsax-react';
import './../style.css';

function EnterEmail() {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ email: false, general: false });
    const [loading, setLoading] = useState(false);

    // تغییر ایمیل و پاک کردن خطاهای قبلی
    const emailChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        setErrors((prev) => ({ ...prev, email: false, general: false }));
    };

    // هندلر ارسال فرم ایمیل
    const enterEmailHandler = async (event: any) => {
        event.preventDefault();
        setLoading(true);

        const isValidEmail = validateEmail(email);

        setErrors({
            email: !isValidEmail,
            general: false,
        });

        if (isValidEmail) {
            try {
                // ذخیره ایمیل و هدایت به صفحه بعد
                localStorage.setItem('userEmail', email);
                alert('Email successfully sent! Please check your inbox.');
                // هدایت به صفحه بعد
                window.location.href = '/auth/check-email';
            } catch (error) {
                setErrors((prev) => ({ ...prev, general: true }));
            }
        }

        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg h-lvh">
            <div className="card max-w-[370px] w-full">
                <form onSubmit={enterEmailHandler} className="card-body flex flex-col gap-5 p-10" id="reset_password_enter_email_form">
                    <div className="text-center mb-2.5">
                        <h3 className="text-lg font-medium text-gray-900">Your Email</h3>
                        <span className="text-2sm text-gray-700">Enter your email to reset password</span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="form-label font-normal text-gray-900">Email</label>
                        <input
                            className="input"
                            placeholder="email@email.com"
                            type="text"
                            value={email}
                            onChange={emailChangeHandler}
                            required
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p className="error-text">Your email is not correct!</p>}
                    </div>

                    {errors.general && <p className="error-text">An error occurred while sending the email. Please try again.</p>}

                    <button type="submit" className={`btn btn-primary flex justify-center grow ${loading ? 'loading' : ''}`} disabled={loading}>
                        {loading ? 'Sending...' : 'Continue'}
                        <ArrowRight size="16" color="#fff" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EnterEmail;
