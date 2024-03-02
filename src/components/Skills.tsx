import ShowCase from "./ShowCase";

const Skills = () => {
  return (
    <div className="flex flex-col items-center px-36 py-32">
      <div className="text-3xl font-mono font-bold mb-20">Skills</div>
      <div className="grid grid-cols-3 ">
        <ShowCase
          achievement="React"
          achievementClassName="font-bold font-mono text-xl border-2 p-2 rounded-xl w-[200px] h-[70px] text-center"
        />
        <ShowCase
          achievement="JavaScript"
          achievementClassName="font-bold font-mono text-xl border-2 p-2 rounded-xl w-[200px] h-[70px] text-center"
        />
        <ShowCase
          achievement="TypeScript"
          achievementClassName="font-bold font-mono text-xl border-2 p-2 rounded-xl w-[200px] h-[70px] text-center"
        />
        <ShowCase
          achievement="Tailwind CSS"
          achievementClassName="font-bold font-mono text-xl border-2 p-2 rounded-xl w-[200px] h-[70px] text-center"
        />
        <ShowCase
          achievement="React Native"
          achievementClassName="font-bold font-mono text-xl border-2 p-2 rounded-xl w-[200px] h-[70px] text-center"
        />
        <ShowCase
          achievement="HTML"
          achievementClassName="font-bold font-mono text-xl border-2 p-2 rounded-xl w-[200px] h-[70px] text-center"
        />
        <ShowCase
          achievement="Firebase"
          achievementClassName="font-bold font-mono text-xl border-2 p-2 rounded-xl w-[200px] h-[70px] text-center"
        />
        <ShowCase
          achievement="MongoDB"
          achievementClassName="font-bold font-mono text-xl border-2 p-2 rounded-xl w-[200px] h-[70px] text-center"
        />
        <ShowCase
          achievement="Python"
          achievementClassName="font-bold font-mono text-xl border-2 p-2 rounded-xl w-[200px] h-[70px] text-center"
        />
      </div>
    </div>
  );
};

export default Skills;
