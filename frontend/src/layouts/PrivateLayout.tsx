import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface PrivateLayoutProps {
  children: ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default PrivateLayout;
