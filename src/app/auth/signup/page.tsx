import React from "react";
import SignupForm from "@/components/auth/Signup";
import AuthLayout from "@/view/layout/AuthLayout";

const Signup = () => {
  return (
    <AuthLayout>
        <SignupForm/>
    </AuthLayout>
  );
};
export default Signup;
