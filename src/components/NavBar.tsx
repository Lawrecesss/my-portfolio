import ThemeModeButton from "./ThemeModeButton";

const NavBar = () => {
  return (
    <div className="flex flex-rows justify-between px-32 py-2 itmes-centers">
      <div className="text-3xl font-bold ">LHS</div>
      <ThemeModeButton />
    </div>
  );
};

export default NavBar;
