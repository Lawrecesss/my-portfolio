import React, { ReactNode } from "react";

import { Button } from "../ui/button";

interface Props {
  MouseEvent: React.Dispatch<React.SetStateAction<boolean>>;
  condition: boolean;
  icon: ReactNode;
  title: string;
}
const NavMenuItem = ({ MouseEvent, condition, icon, title }: Props) => {
  return (
    <Button
      className="bg-inherit text-nav hover:bg-inherit hover:text-inherit"
      onMouseOver={() => MouseEvent(true)}
      onMouseLeave={() => MouseEvent(false)}
    >
      <span className="w-10 flex justify-center text-lg font-light">
        {condition ? icon : title}
      </span>
    </Button>
  );
};

export default NavMenuItem;
