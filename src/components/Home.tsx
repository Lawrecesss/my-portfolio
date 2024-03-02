import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <div className="flex flex-row px-36 py-56 pt-44 justify-center">
      <div className="flex flex-col justify-items-center items-center gap-5">
        <div className="text-lg text-gray-500 font-bold font-mono">
          Hello, I'm
        </div>
        <div className="text-5xl font-bold  font-mono">Lin Htet Shein</div>
        <div className="text-2xl font-bold text-gray-500 font-mono">
          Frontend Developer
        </div>
        <div>
          <Button className="rounded-full mx-2 font-mono mb-5 h-12">
            Download CV
          </Button>
          <Button className="rounded-full mx-2 font-mono mb-5 h-12">
            Contact Info
          </Button>
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
