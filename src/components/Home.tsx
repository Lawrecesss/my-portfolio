import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <div className="flex flex-row px-36 py-56 justify-center">
      <div className="flex flex-col justify-items-center items-center gap-5">
        <h4 className="text-lg text-gray-500 font-bold">Hello, I'm</h4>
        <h1 className="text-5xl font-bold ">Lin Htet Shein</h1>
        <h3 className="text-2xl font-bold text-gray-500">Frontend Developer</h3>
        <div>
          <Button className="rounded-full mx-2 mb-5 h-12">Download CV</Button>
          <Button className="rounded-full mx-2  mb-5 h-12">Contact Info</Button>
        </div>
        <div className="">
          <Button className="rounded-full p-2 mx-2 h-12 w-12">
            <Linkedin
              onClick={() =>
                (location.href = "https://www.linkedin.com/in/lin-htet-shein/")
              }
            ></Linkedin>
          </Button>
          <Button className="rounded-full p-2 mx-2 h-12 w-12">
            <Github
              onClick={() => (location.href = "https://github.com/Lawrecesss")}
            ></Github>
          </Button>
        </div>
      </div>

      <img
        src="https://hanminthant.com/wp-content/uploads/2024/02/IMG_6917.jpg"
        className="w-[300px] rounded-lg ml-36"
      />
    </div>
  );
};

export default Home;
