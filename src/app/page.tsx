import React from "react";
import { strings } from "./utils/strings";
import Link from "next/link";
import Logomark from "./components/Logomark";
import PrimaryButton from "./components/PrimaryButton";

export default function Home() {
  const header = (
    <div className="flex flex-row items-center justify-center">
      <Logomark />
    </div>
  );

  const menu = (
    <ul className="flex flex-row">
      {strings.home.links.map((link, index) => (
        <PrimaryButton>
          <Link href={link.destination} target={link.target}>
            {link.title}
          </Link>
        </PrimaryButton>
      ))}
    </ul>
  );

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-khoury-blue via-khoury-cyan to-khoury-teal">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col justify-center items-center gap-4 bg-white w-full pt-6 pb-8 shadow-2xl">
          {header}
          <p className="italic text-khoury-dark drop-shadow-md cursor-default">
            {strings.home.tagline}
          </p>
          {menu}
        </div>
      </div>
    </div>
  );
}
