interface Props {
  image: string;
  title: string;
}

const SkillItem = ({ image, title }: Props) => {
  return (
    <div className="flex flex-row gap-5 my-5">
      <img src={image} width={25} height={20} />
      <p>{title}</p>
    </div>
  );
};

export default SkillItem;
