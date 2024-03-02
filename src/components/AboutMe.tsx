const AboutMe = () => {
  return (
    <div className="flex flex-col items-center px-36 pb-56 pt-20">
      <div className="font-mono font-bold text-3xl mb-20">About Me</div>
      <div className="flex flex-row gap-5">
        <div className="flex font-bold font-mono text-2xl border-2 p-2 rounded-xl w-[500px] h-[280px] items-center">
          <div className="text-sm font-normal p-3 text-justify">
            An aspiring frontend developer egar to provide fascinating user
            expriences. Skilled problem solver with innovative mindset.
            Dedicated to contribute expertise and creatvity.
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-bold font-mono text-xl border-2 p-2 rounded-xl w-[350px] h-[130px] text-center">
            Educations
            <div className="text-sm font-normal p-3 text-center">
              Bachelor of Science with Honours in Computing Science
            </div>
          </div>
          <div className="font-bold font-mono text-xl border-2 p-2 rounded-xl w-[350px] h-[130px] text-center">
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
