"use client";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div lang="fa" className=" flex items-center justify-center grow bg-center bg-no-repeat bg-light-auth-bg dark:bg-dark-auth-bg m-0">
      {children}
    </div>
  );
};

export default AuthLayout;
