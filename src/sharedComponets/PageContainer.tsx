import React, { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <main className="w-full p-8 mx-auto sm:px-6 lg:px-8 sm:flex">
      {children}
    </main>
  );
};

export default PageContainer;
