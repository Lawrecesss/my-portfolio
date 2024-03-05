const AboutMe = () => {
  return (
    <div className="flex flex-col items-center px-36 pb-32">
      <div className=" font-bold text-3xl mb-20">About Me</div>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col font-bold text-2xl border-2 p-2 rounded-xl w-[500px] h-[450px]">
          <span className="text-sm font-normal p-3 text-justify">
            Fresh computer science graduate who aspires frontend development and
            egar to provide fascinating user expriences. Strong interest in AI
            and Mechine Learning. Skilled problem solver with innovative mindset
            and team player. Dedicated to contribute expertise and creatvity.
          </span>
          <span className="font-semibold text-base px-3 mt-5 text-justify">
            My University Journey and Skill Development
          </span>
          <span className="text-sm font-normal px-3 mt-3 text-justify">
            During my university years, I encountered various challenges and
            overcoming these obstacles, I built the strong fundamental in both
            hard skills and soft skills.
          </span>
          <span className="text-sm font-bold px-3 my-1 text-justify">
            Mobile Development -{" "}
            <span className="text-sm font-normal text-justify">
              I developed an iOS mobile multilingual messaging application as my
              final year project.
            </span>
          </span>
          <span className="text-sm font-bold px-3 my-1 text-justify">
            Game Development -{" "}
            <span className="text-sm font-normal text-justify">
              I developed Chess game using the powerful development platform,
              Unity. I produced the functional solutions with my coworker.
            </span>
          </span>
          <span className="text-sm font-normal px-3 my-1 text-justify">
            As extracurricular activites, I participated in a hackathon hosted
            by <span className="font-bold">Curtin Singapore x ComSSA </span>and
            I am currently a{" "}
            <span className="font-bold">42 Singapore Pisciner.</span>
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-bold text-xl border-2 p-2 rounded-xl w-[350px] h-[130px] text-center">
            Educations
            <div className="text-sm font-normal p-3 text-center">
              Bachelor of Science with Honours in Computing Science
            </div>
          </div>
          <div className="font-bold text-xl border-2 p-2 rounded-xl w-[350px] h-[130px] text-center">
            Certifications
            <div className="text-sm font-normal p-3 text-center">
              Machine Learning Specailization
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
