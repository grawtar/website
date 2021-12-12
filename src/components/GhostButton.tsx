import Link from "next/link";

type Props = { href: string };
const GhostButton: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="  text-gray-500 px-6 py-1 text-xl hover:text-gray-900 transition-all m-auto">{children}</a>
    </Link>
  );
};

export default GhostButton;
