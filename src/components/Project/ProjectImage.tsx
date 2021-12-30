import Link from "next/link";

const ProjectImage: React.FC<{ href: string }> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className={`w-3/4 sm:w-1/2 md:w-4/12 min-h-0 md:min-h-256 justify-center items-center flex m-2`}>{children}</a>
    </Link>
  );
};

export default ProjectImage;
