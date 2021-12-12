import Link from "next/link";

type Props = { href: string };
const PillButton: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="border-2 border-primary text-primary rounded-full px-6 py-1 text-xl hover:text-white hover:bg-primary transition-all m-auto">
        {children}
      </a>
    </Link>
  );
};

export default PillButton;
