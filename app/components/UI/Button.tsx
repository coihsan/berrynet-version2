import Link from "next/link";
interface Props {
  className: string;
  text: string;
  href: string;
  icon?: JSX.Element;
}
const ButtonLink = ({ className, text, href, icon }: Props) => {
  return (
    <Link
      className={`${className} flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-bold`}
      href={href}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </Link>
  );
};
export default ButtonLink;
