"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiLeftArrow, BiLeftArrowAlt, BiSolidHome } from "react-icons/bi";
import {
  BsBrightnessHighFill,
  BsEmojiKissFill,
  BsFileEarmarkArrowDown,
  BsFillMoonStarsFill,
  BsGithub,
  BsLinkedin,
  BsSlashCircle,
} from "react-icons/bs";
import { FaLeftLong } from "react-icons/fa6";
import { themeChange } from "theme-change";

export default function Navbar() {
  const [btn, setBtn] = useState("btn-");
  const [bgcolor, setBgcolor] = useState("bg-transparent");
  const [shadow, setShadow] = useState("shadow");
  const [hamburger, setHamburger] = useState("hamburger-icon");
  const currentPath = usePathname();
  const navLinks = ["About", "Skills", "Projects", "Contact"];
  useEffect(() => {
    themeChange(false);
  }, []);

  const [scrollPosition, setScrollPosition] = useState({
    previous: 0,
    current: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const newPos = window.scrollY;
      const prevPos = scrollPosition.current;
      setScrollPosition({ previous: prevPos, current: newPos });
    };
    if (scrollPosition.current < 120) {
      setBtn("btn-ghost");
      setBgcolor("bg-transparent");
      setShadow("");
      setHamburger("hamburger-icon");
    }
    if (scrollPosition.current > 300) {
      setBtn("btn-secondary");
      setHamburger("hamburger-icon-alt");
    }
    if (
      scrollPosition.current / scrollPosition.previous > 1 &&
      scrollPosition.current > 300
    ) {
      setShadow("shadow-md");
      setBgcolor("bg-base-100 opacity-80");
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav
      className={`fixed flex items-center justify-between px-10 py-1 mx-auto mb-12 w-full  ${bgcolor} rounded-xl z-40  hover:opacity-100 transition-all delay-350 ease-in-out ${shadow}`}
    >
      <div
        className={`group dropdown dropdown-hover place-self-start pr-8`}
      >
        {currentPath === "/" ? (
          <div
            tabIndex={0}
            className={`btn ${btn} text-primary dropdown dropdown-bottom flex w-fit aspect-square rounded-full self-start`}
            role="button"
            aria-label="Dropdown menu button"
          >
            <svg
              className="scale-[220%]"
              id={`${hamburger}`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </div>
        ) : (
          <Link href="/#projects" className={`btn ${btn}`}>
            {/* <BiSolidHome className="pointer-events-none scale-150" /> */}
            <BiLeftArrowAlt className="pointer-events-none scale-[200%]" />

          </Link>
        )}
        <ul
          tabIndex={0}
          className="mt-1 bg-base-100  dropdown-content delay-150 menu p-2 shadow  rounded-box w-52 border-dotted"
        >
          {navLinks.map((navLink) => (
            <li key={navLink}>
              <Link
                href={
                  currentPath === "/"
                    ? `#${navLink.toLowerCase()}`
                    : `/#${navLink.toLowerCase()}`
                }
                aria-label={`Link to ${navLink}`}
              >
                {navLink}
              </Link>
            </li>
          ))}
          <li>
            <Link href="https://github.com/Roodbaraky" target="_blank" aria-label="Link to GitHub">
              <BsGithub />
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/koorosh-roodbaraky/"
              target="_blank"
              aria-label="Link to LinkedIn"
            >
              <BsLinkedin />
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href="https://2ly.link/1ygni" target="_blank" aria-label="Link to download CV">
              <BsFileEarmarkArrowDown />
              Download CV
            </Link>
          </li>

          <div className="sm:hidden flex flex-wrap justify-evenly">
            <button
              data-set-theme="emerald"
              data-act-class="ACTIVECLASS"
              className="btn btn-sm rounded-full btn-ghost"
            >
              <BsBrightnessHighFill />
            </button>
            <button
              data-set-theme="dark"
              data-act-class="ACTIVECLASS"
              className="btn btn-sm rounded-full btn-ghost "
            >
              <BsFillMoonStarsFill />
            </button>
            <button
              data-set-theme="valentine"
              data-act-class="ACTIVECLASS"
              className="btn btn-sm rounded-full btn-ghost "
            >
              <BsEmojiKissFill />
            </button>
          </div>
        </ul>
      </div>

      <div className="hidden sm:flex flex-nowrap">
        <button
          data-set-theme=""
          data-act-class="ACTIVECLASS"
          className={`${btn} rounded-full btn`}
        >
          <BsSlashCircle />
        </button>
        <button
          data-set-theme="emerald"
          data-act-class="ACTIVECLASS"
          className={`${btn} rounded-full btn`}
        >
          <BsBrightnessHighFill />
        </button>
        <button
          data-set-theme="dark"
          data-act-class="ACTIVECLASS"
          className={`${btn} rounded-full btn`}
        >
          <BsFillMoonStarsFill />
        </button>
        <button
          data-set-theme="valentine"
          data-act-class="ACTIVECLASS"
          className={`${btn} rounded-full btn`}
        >
          <BsEmojiKissFill />
        </button>
      </div>
    </nav>
  );
}
