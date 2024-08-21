import { cn } from "@/lib/utils";
import React, { FunctionComponent } from "react";

interface MainPageProps {
  children: React.ReactNode;
  className?: string;
}

const MainPage: FunctionComponent<MainPageProps> = ({
  children,
  className,
}) => {
  return (
    <main className={cn(" max-w-[1280px] mx-auto", className && className)}>
      {children}
    </main>
  );
};

export default MainPage;
