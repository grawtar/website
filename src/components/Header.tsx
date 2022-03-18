import Hamburger from "hamburger-react";
import Link from "next/link";
import { NextPage } from "next";
import React from "react";
import useWindowSize from "../hooks/useWindowSize";

const NavItem: React.FC<{ href: string; small?: boolean }> = ({
  href,
  small,
  children,
}) => {
  return (
    <Link href={href}>
      <a
        className={`${
          small ? "text-gray-600" : "text-gray-400"
        } hover:text-gray-800 transition-all`}
      >
        {children}
      </a>
    </Link>
  );
};

type Props = {
  overrideTitle?: string;
  overrideTitleHref?: string;
};
const Header: NextPage<Props> = ({ overrideTitle, overrideTitleHref }) => {
  const [isOpen, setOpen] = React.useState(false);
  const windowSize = useWindowSize();

  return windowSize.width && windowSize.width < 700 ? (
    <div
      className="flex justify-between items-center p-4 sticky top-0 bg-white shadow-md"
      style={{ zIndex: 90 }}
    >
      <span
        className="p-4"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 500,
        }}
      >
        <Hamburger toggled={isOpen} onToggle={setOpen} />
      </span>
      <Link href={overrideTitleHref ?? "/"}>
        <a className="text-4xl text-primary ml-16">
          {overrideTitle ?? "Uroš Štok"}
        </a>
      </Link>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: isOpen ? "#00000099" : "transparent",
          zIndex: 100,
          display: isOpen ? "inherit" : "none",
          transition: "all 0.2s",
        }}
        className="shadow-lg"
      ></div>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          paddingTop: "3.5em",
          width: isOpen ? "85vw" : "0px",
          height: "100vh",
          backgroundColor: "white",
          zIndex: 110,
          transition: "all 0.2s",
        }}
        className="shadow-lg"
      >
        <div
          className="flex flex-col justify-between relative p-4 h-full"
          style={{
            display: isOpen ? "flex" : "none",
            opacity: isOpen ? "1" : "0",
            transition: "all 0.25s",
            width: "100vw",
          }}
        >
          <div className="flex flex-col text-2xl space-y-2">
            <NavItem small href="/">
              Home
            </NavItem>
            {/* <NavItem href="/story">My story</NavItem> */}
            <NavItem small href="/#projects">
              Projects
            </NavItem>
            <NavItem small href="/blog">
              Blog
            </NavItem>
          </div>
          <div className="flex space-x-4 items-center">
            <NavItem small href="mailto:contact@urosstok.com">
              <svg
                width="32"
                height="32"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_237_45)">
                  <path
                    d="M18.577 7.05651C18.7213 6.94186 18.9358 7.04911 18.9358 7.23033V14.7935C18.9358 15.7736 18.1406 16.5688 17.1606 16.5688H1.77523C0.795155 16.5688 0 15.7736 0 14.7935V7.23403C0 7.04911 0.210808 6.94556 0.358744 7.06021C1.18718 7.70373 2.28561 8.52107 6.05797 11.2616C6.83833 11.8311 8.15496 13.0294 9.46789 13.022C10.7882 13.0331 12.1307 11.8089 12.8815 11.2616C16.6539 8.52107 17.7486 7.70003 18.577 7.05651ZM9.46789 11.8348C10.3259 11.8496 11.5612 10.7549 12.1825 10.3037C17.0903 6.74214 17.4638 6.43148 18.5955 5.54386C18.81 5.37744 18.9358 5.11855 18.9358 4.84487V4.14217C18.9358 3.1621 18.1406 2.36694 17.1606 2.36694H1.77523C0.795155 2.36694 0 3.1621 0 4.14217V4.84487C0 5.11855 0.125745 5.37374 0.340252 5.54386C1.47196 6.42778 1.8455 6.74214 6.75327 10.3037C7.3746 10.7549 8.60986 11.8496 9.46789 11.8348Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_237_45">
                    <rect width="18.9358" height="18.9358" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </NavItem>
            <NavItem small href="https://www.linkedin.com/in/urosstok">
              <svg
                width="32"
                height="32"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_237_43)">
                  <path
                    d="M15.8165 1.18359H1.611C0.960084 1.18359 0.431213 1.71986 0.431213 2.37818V16.5578C0.431213 17.2161 0.960084 17.7524 1.611 17.7524H15.8165C16.4675 17.7524 17 17.2161 17 16.5578V2.37818C17 1.71986 16.4675 1.18359 15.8165 1.18359ZM5.43884 15.3854H2.98311V7.47826H5.44254V15.3854H5.43884ZM4.21097 6.39833C3.42321 6.39833 2.78709 5.75851 2.78709 4.97445C2.78709 4.19039 3.42321 3.55057 4.21097 3.55057C4.99503 3.55057 5.63485 4.19039 5.63485 4.97445C5.63485 5.76221 4.99873 6.39833 4.21097 6.39833ZM14.6441 15.3854H12.1884V11.5391C12.1884 10.6219 12.1699 9.44211 10.9125 9.44211C9.63282 9.44211 9.4368 10.4407 9.4368 11.4725V15.3854H6.98107V7.47826H9.33695V8.55819H9.37023C9.69939 7.93686 10.5019 7.28225 11.6965 7.28225C14.1818 7.28225 14.6441 8.92063 14.6441 11.0509V15.3854Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_237_43">
                    <rect
                      width="16.5688"
                      height="18.9358"
                      fill="white"
                      transform="translate(0.431213)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </NavItem>
            <NavItem small href="https://github.com/grawtar">
              <svg
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </NavItem>
            <NavItem small href="https://twitter.com/urosstok">
              <svg
                width="32"
                height="32"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_237_41)">
                  <path
                    d="M17.7049 5.61087C17.7169 5.77907 17.7169 5.94731 17.7169 6.11552C17.7169 11.2459 13.812 17.1574 6.67506 17.1574C4.47629 17.1574 2.43374 16.5205 0.715576 15.4152C1.02798 15.4512 1.32833 15.4632 1.65275 15.4632C3.467 15.4632 5.13712 14.8505 6.4708 13.8052C4.76465 13.7691 3.33485 12.6517 2.84223 11.1138C3.08255 11.1498 3.32283 11.1738 3.57517 11.1738C3.9236 11.1738 4.27206 11.1258 4.59645 11.0417C2.81822 10.6812 1.48451 9.11928 1.48451 7.23291V7.18487C2.00114 7.47323 2.60194 7.65346 3.23869 7.67746C2.19338 6.98057 1.50855 5.79109 1.50855 4.4454C1.50855 3.7245 1.70075 3.06368 2.0372 2.48695C3.9476 4.8419 6.81922 6.3798 10.0392 6.54804C9.97917 6.25968 9.94311 5.95933 9.94311 5.65895C9.94311 3.52024 11.6733 1.77808 13.824 1.77808C14.9414 1.77808 15.9506 2.24666 16.6595 3.00361C17.5366 2.83541 18.3777 2.51099 19.1226 2.06644C18.8342 2.96759 18.2215 3.72454 17.4165 4.20511C18.1975 4.12105 18.9544 3.90473 19.6513 3.60438C19.1227 4.37331 18.4618 5.05815 17.7049 5.61087Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_237_41">
                    <rect
                      width="18.9358"
                      height="18.9358"
                      fill="white"
                      transform="translate(0.715576)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </NavItem>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="max-w-7xl mx-auto px-2">
      <div className="flex justify-between items-center py-5 mx-2 md:mx-8">
        <Link href={overrideTitleHref ?? "/"}>
          <a className="text-4xl text-primary">
            {overrideTitle ?? "Uroš Štok"}
          </a>
        </Link>
        <div className="flex space-x-14">
          <div className="flex space-x-6 items-center">
            <NavItem href="/">Home</NavItem>
            {/* <NavItem href="/story">My story</NavItem> */}
            <NavItem href="/#projects">Projects</NavItem>
            <NavItem href="/blog">Blog</NavItem>
          </div>
          <div className="flex space-x-4 items-center">
            <NavItem href="mailto:contact@urosstok.com">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_237_45)">
                  <path
                    d="M18.577 7.05651C18.7213 6.94186 18.9358 7.04911 18.9358 7.23033V14.7935C18.9358 15.7736 18.1406 16.5688 17.1606 16.5688H1.77523C0.795155 16.5688 0 15.7736 0 14.7935V7.23403C0 7.04911 0.210808 6.94556 0.358744 7.06021C1.18718 7.70373 2.28561 8.52107 6.05797 11.2616C6.83833 11.8311 8.15496 13.0294 9.46789 13.022C10.7882 13.0331 12.1307 11.8089 12.8815 11.2616C16.6539 8.52107 17.7486 7.70003 18.577 7.05651ZM9.46789 11.8348C10.3259 11.8496 11.5612 10.7549 12.1825 10.3037C17.0903 6.74214 17.4638 6.43148 18.5955 5.54386C18.81 5.37744 18.9358 5.11855 18.9358 4.84487V4.14217C18.9358 3.1621 18.1406 2.36694 17.1606 2.36694H1.77523C0.795155 2.36694 0 3.1621 0 4.14217V4.84487C0 5.11855 0.125745 5.37374 0.340252 5.54386C1.47196 6.42778 1.8455 6.74214 6.75327 10.3037C7.3746 10.7549 8.60986 11.8496 9.46789 11.8348Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_237_45">
                    <rect width="18.9358" height="18.9358" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </NavItem>
            <NavItem href="https://www.linkedin.com/in/urosstok">
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_237_43)">
                  <path
                    d="M15.8165 1.18359H1.611C0.960084 1.18359 0.431213 1.71986 0.431213 2.37818V16.5578C0.431213 17.2161 0.960084 17.7524 1.611 17.7524H15.8165C16.4675 17.7524 17 17.2161 17 16.5578V2.37818C17 1.71986 16.4675 1.18359 15.8165 1.18359ZM5.43884 15.3854H2.98311V7.47826H5.44254V15.3854H5.43884ZM4.21097 6.39833C3.42321 6.39833 2.78709 5.75851 2.78709 4.97445C2.78709 4.19039 3.42321 3.55057 4.21097 3.55057C4.99503 3.55057 5.63485 4.19039 5.63485 4.97445C5.63485 5.76221 4.99873 6.39833 4.21097 6.39833ZM14.6441 15.3854H12.1884V11.5391C12.1884 10.6219 12.1699 9.44211 10.9125 9.44211C9.63282 9.44211 9.4368 10.4407 9.4368 11.4725V15.3854H6.98107V7.47826H9.33695V8.55819H9.37023C9.69939 7.93686 10.5019 7.28225 11.6965 7.28225C14.1818 7.28225 14.6441 8.92063 14.6441 11.0509V15.3854Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_237_43">
                    <rect
                      width="16.5688"
                      height="18.9358"
                      fill="white"
                      transform="translate(0.431213)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </NavItem>
            <NavItem href="https://github.com/grawtar">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </NavItem>
            <NavItem href="https://twitter.com/urosstok">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_237_41)">
                  <path
                    d="M17.7049 5.61087C17.7169 5.77907 17.7169 5.94731 17.7169 6.11552C17.7169 11.2459 13.812 17.1574 6.67506 17.1574C4.47629 17.1574 2.43374 16.5205 0.715576 15.4152C1.02798 15.4512 1.32833 15.4632 1.65275 15.4632C3.467 15.4632 5.13712 14.8505 6.4708 13.8052C4.76465 13.7691 3.33485 12.6517 2.84223 11.1138C3.08255 11.1498 3.32283 11.1738 3.57517 11.1738C3.9236 11.1738 4.27206 11.1258 4.59645 11.0417C2.81822 10.6812 1.48451 9.11928 1.48451 7.23291V7.18487C2.00114 7.47323 2.60194 7.65346 3.23869 7.67746C2.19338 6.98057 1.50855 5.79109 1.50855 4.4454C1.50855 3.7245 1.70075 3.06368 2.0372 2.48695C3.9476 4.8419 6.81922 6.3798 10.0392 6.54804C9.97917 6.25968 9.94311 5.95933 9.94311 5.65895C9.94311 3.52024 11.6733 1.77808 13.824 1.77808C14.9414 1.77808 15.9506 2.24666 16.6595 3.00361C17.5366 2.83541 18.3777 2.51099 19.1226 2.06644C18.8342 2.96759 18.2215 3.72454 17.4165 4.20511C18.1975 4.12105 18.9544 3.90473 19.6513 3.60438C19.1227 4.37331 18.4618 5.05815 17.7049 5.61087Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_237_41">
                    <rect
                      width="18.9358"
                      height="18.9358"
                      fill="white"
                      transform="translate(0.715576)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </NavItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
