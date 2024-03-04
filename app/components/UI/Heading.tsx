import { spacegrotesk } from "./fonts";
interface Props {
  title: string;
  size: string;
}
const Heading = ({ title, size }: Props) => {
  return (
    <h1 className={`${spacegrotesk.className} ${size} font-bold `}>{title}</h1>
  );
};
