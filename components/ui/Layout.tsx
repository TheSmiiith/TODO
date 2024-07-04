import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Layout = (props: LayoutProps) => {
  return (
    <div
      className={`flex h-svh w-screen items-center justify-center overflow-hidden text-gray-950 dark:text-gray-200 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Layout;
