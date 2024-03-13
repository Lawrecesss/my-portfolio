import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div
      className="py-20 flex flex-row gap-36 items-center justify-center"
      id="Contact"
    >
      <div>
        <h3 className="text-4xl font-semibold text-nav my-2">Let's chat.</h3>
        <h3 className="text-4xl font-semibold text-nav my-2">
          I love to hear from you.
        </h3>
        <h3 className="text-xl font-light text-nav my-2">
          Let's work together!!
        </h3>
      </div>
      <div>
        <div className="border-nav border-2 pl-3 pr-10 py-3 rounded-xl items-center flex flex-row gap-5">
          <Mail />
          <div className="flex flex-col">
            <span>Mail me at </span>
            <a
              href="mailto:lhshein14@gmail.com?subject=Hey there!"
              className="font-semibold"
            >
              lhshein14@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
