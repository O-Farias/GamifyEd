import React, { ReactNode } from "react";

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return <div className="min-h-screen">{children}</div>;
};

export default PublicLayout;
