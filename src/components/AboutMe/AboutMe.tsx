import dark from "src/assets/dark.png";
import light from "src/assets/light.png";

const AboutMe = () => {
  return (
    <div className="p-20 my-20 grid grid-cols-2">
      <div>
        <img src={light} className="w-[400px] dark:scale-0 dark:hidden" />
        <img src={dark} className="hidden w-[400px] dark:block" />
      </div>
      <div>
        <h1 className="text-nav font-light text-3xl text-center font-nunito mb-10">
          My University Journey & Skill Developments
        </h1>
        <p className="font-light font-nunito text-justify mb-5">
          In my university days, I countered many challenges and overcoming
          those challenges, I built the strong understanding of tech skills.
        </p>
        <p className="font-light font-nunito text-justify mb-5">
          {" "}
          <span className="font-bold">Mobile Development</span>, I developed a
          multilingual messaging application. I proposed the solutions based on
          the real-world problems concerning with language barrier and UX of the
          messaging application.
        </p>
        <p className="font-light font-nunito text-justify mb-5">
          {" "}
          <span className="font-bold">Game Development</span>, I built a chess
          game using the powerful platform{" "}
          <span className="font-bold">Unity</span>. It was a group project and
          my role was the developer and problem solver. I created and delievered
          a lot of functional solutions related to theories of the chess game.
        </p>
        <p>
          As extracurricular activites, I participated in a hackathon hosted by{" "}
          <span className="font-bold">Curtin Singapore x ComSSA</span> and I am
          currently upgrading my hard skills in{" "}
          <span className="font-bold">42 Singapore</span> as a pisciner.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
