"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { default as NLink } from "next/link";

import classes from "./Link.module.scss";

interface ILinkProps {
  effects?: boolean;
  href: string;
  children: React.ReactNode | string;
}

const Link: React.FC<ILinkProps> = ({ href, children, effects = true }) => {
  let active: boolean;
  const pathname = usePathname();

  if (effects) {
    pathname === href ? (active = true) : (active = false);
  } else {
    active = false;
  }

  return (
    <NLink
      className={
        effects ? (active ? classes.active : classes.link) : classes.non_effects
      }
      href={href}
    >
      {children}
    </NLink>
  );
};

export default Link;
