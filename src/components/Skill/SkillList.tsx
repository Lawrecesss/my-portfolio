import SkillItem from "./SkillItem";

interface Props {
  list: ListItem[];
}
interface ListItem {
  image: string;
  title: string;
}
const SkillList = ({ list }: Props) => {
  return (
    <div>
      {list.map((item) => (
        <SkillItem image={item.image} title={item.title} />
      ))}
    </div>
  );
};

export default SkillList;
