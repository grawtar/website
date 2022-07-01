import Link from "next/link";
import React from "react";

const NavItem: React.FC<{ children: React.ReactNode; href: string }> = ({
  children,
  href,
}) => {
  return (
    <Link passHref href={href}>
      <a className="font-semibold inline-flex text-gray-500 mr-0 lg:mr-4 hover:text-black border-0 py-1 px-3 focus:outline-none cursor-pointer">
        {children}
      </a>
    </Link>
  );
};

const NavItemBox: React.FC<{ children: React.ReactNode; href: string }> = ({
  children,
  href,
}) => {
  return (
    <Link passHref href={href}>
      <a className="font-semibold rounded-sm bg-gray-200 inline-flex text-gray-500 mr-0 lg:mr-4 hover:text-white hover:bg-gray-900 border-0 py-1 px-3 focus:outline-none cursor-pointer">
        {children}
      </a>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header>
      <div className="container mx-auto flex flex-wrap py-4 flex-col space-y-4 md:space-y-0 md:flex-row items-center">
        <Link passHref href="/">
          <a className="text-2xl font-semibold inline-flex border-0 py-1 px-3 focus:outline-none cursor-pointer">
            Uroš Štok
          </a>
        </Link>
        <nav className="w-full md:w-auto md:ml-auto flex flex-wrap items-center text-lg justify-around lg:justify-center">
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItemBox href="mailto:contact@urosstok.com">Contact Me</NavItemBox>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
