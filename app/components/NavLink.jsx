"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";

const NavLink = ({ href, children }) => {
  const segment = useSelectedLayoutSegment();
  const active = href === `/${segment}`;

  return (
    <Link
      className={`${active ? "border-b-4 pb-9 border-white" : "border-none"}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
