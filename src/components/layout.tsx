import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="mx-auto h-full w-full max-w-7xl flex-grow">
        {children}
      </div>
    </div>
  );
};

export default Layout;
