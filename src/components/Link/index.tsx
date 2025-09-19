"use client";

import { usePathname } from "next/navigation";
import { default as NLink } from "next/link";

import classes from "./Link.module.scss";

interface ILinkProps {
  href: string;
  children: React.ReactNode | string;
}

const Link: React.FC<ILinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  let active: boolean;

  pathname === href ? active = true : active = false;

  return (
    <NLink className={active ? classes.active : classes.link} href={href} >
      {children}
    </NLink>
  );
};

export default Link;
