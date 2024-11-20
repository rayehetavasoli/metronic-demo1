import React from "react";
import ResetPasswordForm from "@/components/auth/ResetPassword";
import AuthLayout from "@/view/layout/AuthLayout";

const ResetPassword = () => {
  return (
    <AuthLayout>
        <ResetPasswordForm/>
    </AuthLayout>
  );
};
export default ResetPassword;
