import React from "react";
import SigninForm from "@/components/auth/Signin";
import AuthLayout from "@/view/layout/AuthLayout";

const Signin = () => {
  return (
    <AuthLayout>
        <SigninForm/>
    </AuthLayout>
  );
};
export default Signin;
