import NavManu from "./NavManu";
import ThemeModeButton from "./ThemeModeButton";
import { Separator } from "@/components/ui/separator";

const NavBar = () => {
  return (
    <div className="sticky top-0 bg-white dark:bg-black">
      <div className="flex flex-rows justify-between px-5 sm:px-32 py-3 sm:py-5 itmes-centers">
        <div className="sm:text-3xl font-bold self-center">{"< L H S />"}</div>
        <div className="flex flex-rows">
          <NavManu />
          <ThemeModeButton />
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default NavBar;
