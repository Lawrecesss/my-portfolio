import React, { ReactNode } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Button } from "../ui/button";

interface Props {
  MouseEvent: React.Dispatch<React.SetStateAction<boolean>>;
  condition: boolean;
  icon: ReactNode;
  title: string;
  id: string;
  onClick: React.Dispatch<React.SetStateAction<string>>;
}
const NavMenuItem = ({
  MouseEvent,
  condition,
  icon,
  title,
  id,
  onClick,
}: Props) => {
  return (
    <Button
      className="bg-inherit text-nav hover:bg-inherit hover:text-inherit"
      onMouseOver={() => MouseEvent(true)}
      onMouseLeave={() => MouseEvent(false)}
      onClick={() => onClick(title)}
    >
      <Link to={id} smooth>
        <span className="w-10 flex justify-center text-lg font-light">
          {condition ? icon : title}
        </span>
      </Link>
    </Button>
  );
};

export default NavMenuItem;
