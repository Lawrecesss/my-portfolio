import { Github, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="py-32 flex flex-row justify-between">
      <div>
        <h6 className="text-xl font-bold font-nunito text-nav">Hello, I'm</h6>
        <h1 className="text-7xl font-bold font-nunito my-5 text-nav">
          Lin Htet Shein
        </h1>
        <h3 className="text-4xl font-bold font-nunito text-nav">
          Frontend Developer
        </h3>
        <p className="text-xl my-5 font-nunito font-medium text-justify">
          Fresh computer science graduate who aspires frontend development and
          egar to provide fascinating user expriences. Strong interest in AI and
          Mechine Learning. Skilled problem solver with innovative mindset and
          team player. Dedicated to contribute expertise and creatvity.
        </p>
        <div className="mt-10 flex gap-3">
          <Button className="rounded-full hover:bg-nav">Download CV</Button>
          <Button
            className="rounded-full p-2 hover:bg-nav"
            onClick={() => (location.href = "https://github.com/Lawrecesss")}
          >
            <Github />
          </Button>
          <Button
            className="rounded-full p-2 hover:bg-nav"
            onClick={() =>
              (location.href = "www.linkedin.com/in/lin-htet-shein")
            }
          >
            <Linkedin />
          </Button>
        </div>
      </div>
      <div>{/* <img src="src/assets/Subject.png" width={400} /> */}</div>
    </div>
  );
};

export default Hero;
