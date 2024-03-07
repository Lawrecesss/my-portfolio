import { Award, Blocks, Home, Mail, User } from "lucide-react";
import { useState } from "react";
import NavMenuItem from "./NavMenuItem";

export default function NavManu() {
  const [onHome, setOnHome] = useState(false);
  const [onAboutMe, setOnAboutMe] = useState(false);
  const [onSkills, setOnSkills] = useState(false);
  const [onProjects, setOnProjects] = useState(false);
  const [onContact, setOnContact] = useState(false);
  return (
    <div className="mx-32 sm:flex hidden gap-10 px-2 py-1 items-center">
      <NavMenuItem
        MouseEvent={setOnHome}
        condition={onHome}
        icon={<Home size={20} />}
        title="Home"
      />
      <NavMenuItem
        MouseEvent={setOnAboutMe}
        condition={onAboutMe}
        icon={<User size={20} />}
        title="About Me"
      />
      <NavMenuItem
        MouseEvent={setOnSkills}
        condition={onSkills}
        icon={<Award size={20} />}
        title="Skills"
      />
      <NavMenuItem
        MouseEvent={setOnProjects}
        condition={onProjects}
        icon={<Blocks size={20} />}
        title="Projects"
      />
      <NavMenuItem
        MouseEvent={setOnContact}
        condition={onContact}
        icon={<Mail size={20} />}
        title="Contact"
      />
    </div>
  );
}
