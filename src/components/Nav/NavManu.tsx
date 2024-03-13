import { Award, Blocks, Home, Mail, User } from "lucide-react";
import { useState } from "react";
import NavMenuItem from "./NavMenuItem";

export default function NavManu() {
  const [onHome, setOnHome] = useState(false);
  const [onAboutMe, setOnAboutMe] = useState(false);
  const [onSkills, setOnSkills] = useState(false);
  const [onProjects, setOnProjects] = useState(false);
  const [onContact, setOnContact] = useState(false);
  const [clicked, setClicked] = useState("");
  return (
    <div className="mx-32 sm:flex hidden gap-10 px-1 py-1 items-center">
      <NavMenuItem
        MouseEvent={setOnHome}
        condition={clicked == "Home" ? true : onHome}
        icon={<Home size={20} />}
        title="Home"
        id="#Home"
        onClick={setClicked}
      />
      <NavMenuItem
        MouseEvent={setOnAboutMe}
        condition={clicked == "About Me" ? true : onAboutMe}
        icon={<User size={20} />}
        title="About Me"
        id="#AboutMe"
        onClick={setClicked}
      />
      <NavMenuItem
        MouseEvent={setOnSkills}
        condition={clicked == "Skills" ? true : onSkills}
        icon={<Award size={20} />}
        title="Skills"
        id="#Skills"
        onClick={setClicked}
      />
      <NavMenuItem
        MouseEvent={setOnProjects}
        condition={clicked == "Projects" ? true : onProjects}
        icon={<Blocks size={20} />}
        title="Projects"
        id="#Projects"
        onClick={setClicked}
      />
      <NavMenuItem
        MouseEvent={setOnContact}
        condition={clicked == "Contact" ? true : onContact}
        icon={<Mail size={20} />}
        title="Contact"
        id="#Contact"
        onClick={setClicked}
      />
    </div>
  );
}
