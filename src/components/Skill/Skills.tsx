import SkillList from "./SkillList";
import {
  frontendlist,
  designlist,
  Languages,
  Database,
  Backend,
} from "./SkillData";

const Skills = () => {
  return (
    <div className="py-20" id="Skills">
      <h1 className="text-4xl font-light text-nav">
        Technologies I'm proficient in
      </h1>
      <div className="flex flex-row gap-10 flex-wrap justify-center">
        <div className="border w-[300px] p-5 rounded-xl mt-32">
          <h5 className="text-center mb-10">Frontend</h5>
          <SkillList list={frontendlist} />
        </div>
        <div className="border w-[300px] p-5 rounded-xl mt-32">
          <h5 className="text-center mb-10">Design Tools</h5>
          <SkillList list={designlist} />
        </div>
        <div className="border w-[300px] p-5 rounded-xl mt-32">
          <h5 className="text-center mb-10">Languages</h5>
          <SkillList list={Languages} />
        </div>
        <div className="border w-[300px] p-5 rounded-xl mt-10">
          <h5 className="text-center mb-10">Database</h5>
          <SkillList list={Database} />
        </div>
        <div className="border w-[300px] p-5 rounded-xl mt-10">
          <h5 className="text-center mb-10">Backend</h5>
          <SkillList list={Backend} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
