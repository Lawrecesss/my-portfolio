import NavManu from "./NavManu";
import ThemeModeButton from "../Theme/ThemeModeButton";
// import { Separator } from "@/components/ui/separator";

const NavBar = () => {
  return (
    <div className=" sticky top-0 bg-white dark:bg-black">
      <div className="flex flex-rows justify-between sm:py-5">
        <div className="font-rubik text-center text-6xl text-nav font-medium">
          LHS
        </div>
        <div className="flex flex-rows items-center">
          <NavManu />
          <ThemeModeButton />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
