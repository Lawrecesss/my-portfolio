import React, { ReactNode } from "react";

import { Button } from "../ui/button";

interface Props {
  MouseEvent: React.Dispatch<React.SetStateAction<boolean>>;
  condition: boolean;
  icon: ReactNode;
  title: string;
  onClick: string;
}
const NavMenuItem = ({
  MouseEvent,
  condition,
  icon,
  title,
  onClick,
}: Props) => {
  return (
    <Button
      className="bg-inherit text-nav hover:bg-inherit hover:text-inherit"
      onMouseOver={() => MouseEvent(true)}
      onMouseLeave={() => MouseEvent(false)}
      onClick={() => (location.href = onClick)}
    >
      <span className="w-10 flex justify-center text-lg font-light">
        {condition ? icon : title}
      </span>
    </Button>
  );
};

export default NavMenuItem;
