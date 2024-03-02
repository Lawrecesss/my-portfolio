interface Props {
  title?: string;
  achievement?: string;
  titleClassName?: string;
  achievementClassName?: string;
  textClassName?: string;
}
const ShowCase = ({
  title,
  achievement,
  titleClassName,
  achievementClassName,
  textClassName,
}: Props) => {
  return (
    <div className="flex flex-col items-center mx-10 mt-10">
      <div className={"text-3xl font-mono font-bold" + titleClassName}>
        {title}
      </div>
      <div className={achievementClassName}>
        <div className={"text-sm font-normal p-3 text-center" + textClassName}>
          {achievement}
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
