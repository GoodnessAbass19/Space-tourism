"use client";

import { Image } from "@chakra-ui/next-js";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Links = [
  { index: "00", link: "/", name: "home" },
  { index: "01", link: "/destination", name: "destination" },
  { index: "02", link: "/crew", name: "crew" },
  { index: "03", link: "/technology", name: "technology" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed z-[999] w-full bg-transparent text-white mx-auto top-5">
      <div className="flex justify-between items-center mx-auto lg:px-10 px-5">
        <Link href="/">
          <Image
            src="/assets/shared/logo.svg"
            alt="logo"
            width={80}
            height={80}
            priority
            className="max-w-[50px] max-h-[50px] md:max-w-[80px] md:max-h-[80px]"
          />
        </Link>

        <div className="backdrop-blur-sm bg-white/10 rounded-md lg:basis-3/5 md:block hidden">
          <ul className="flex justify-between items-center gap-4 lg:gap-8 px-5 lg:px-10">
            {Links.map((item) => (
              <li
                key={item.index}
                className="text-xl font-semibold uppercase text-center py-10"
              >
                <NavLink href={item.link}>
                  <strong className="xl:inline-block hidden">
                    {item.index}
                  </strong>{" "}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden block">
          <div className="z-50">
            {menu ? (
              <>
                <XMarkIcon
                  className="w-16 h-16 z-50 text-white absolute top-5 right-5"
                  onClick={() => setMenu(!menu)}
                />
                <div
                  className={`${
                    menu ? "right-0" : "right-[-100%]"
                  } text-white absolute  w-full pt-10 h-screen z-40 px-7 py-2 font-medium bg-black top-0 duration-300 right-0`}
                >
                  <ul className="flex flex-col justify-start items-center uppercase h-full gap-10 py-2 text-lg">
                    {Links.map((item) => (
                      <li
                        className="text-xl font-semibold uppercase text-center py-10"
                        key={item.index}
                        onClick={() => setMenu(!menu)}
                      >
                        <Link href={item.link}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <Bars3Icon
                className="w-16 h-16 text-white"
                onClick={() => setMenu(!menu)}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
