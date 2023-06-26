"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import Logomark from "./Logomark";
import ColorVariant from "../types/ColorVariant";
import strings from "../utils/strings";
import PrimaryButton from "./PrimaryButton";

type Props = {
  children?: ReactNode;
};

const Sidebar = ({ children }: Props): ReactNode => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="flex md:flex-col flex-row justify-between md:justify-start md:px-0 px-4 items-center md:w-64 w-full md:h-screen h-16 bg-gradient-to-b from-khoury-teal via-khoury-cyan to-khoury-blue drop-shadow-2xl dark:text-khoury-light">
        <Link
          href={"/"}
          className="flex flex-row m-4 hover:scale-105 transition-all duration-300 hover:drop-shadow-xl"
        >
          <Logomark
            variant={ColorVariant.LIGHT}
            cursor="cursor-pointer"
            size="8"
            textSize="text-xl"
          />
        </Link>
        <div className="flex w-full md:justify-center justify-end px-4">
          {strings.manage.links.map((link, index) => (
            <div key={index}>
              <PrimaryButton
                width="w-48"
                href={link.destination}
                target={link.target}
              >
                {link.title}
              </PrimaryButton>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-khoury-light dark:bg-khoury-dark">
        <div className="m-12 my-16 max-w-3xl">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
