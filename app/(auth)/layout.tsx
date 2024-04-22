import React, { ReactNode } from "react";

type Props = {};

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Hello from Auth Layout</h1>
      {children}
    </div>
  );
};

export default AuthLayout;
