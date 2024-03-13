import NavManu from "./NavManu";
import ThemeModeButton from "../Theme/ThemeModeButton";

const NavBar = () => {
  return (
    <div className=" sticky top-0 bg-white dark:bg-black">
      <div className="flex flex-rows justify-between sm:py-3">
        <div className="font-rubik text-center text-5xl text-nav font-medium">
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
