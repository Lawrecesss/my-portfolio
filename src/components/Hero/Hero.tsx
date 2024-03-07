import { Github, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="py-32">
      <h6 className="text-xl font-bold font-nunito text-nav">Hello, I'm</h6>
      <h1 className="text-7xl font-bold font-nunito my-5 text-nav">
        Lin Htet Shein
      </h1>
      <h3 className="text-4xl font-bold font-nunito text-nav">
        Frontend Developer
      </h3>
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
          onClick={() => (location.href = "www.linkedin.com/in/lin-htet-shein")}
        >
          <Linkedin />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
