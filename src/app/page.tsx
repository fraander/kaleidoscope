import React from "react";
import { strings } from "./utils/strings";
import Link from "next/link";
import Logomark from "./components/Logomark";
import PrimaryButton from "./components/PrimaryButton";
import { twMerge } from "./utils/twMerge";
import LogomarkElement from "./types/LogomarkElement";

export default function Home() {
  const header = (
    <div className="flex flex-row items-center justify-center">
      <Logomark />
    </div>
  );

  const menu = (
    <ul className="flex flex-row">
      {strings.home.links.map((link, index) => (
        <PrimaryButton href={link.destination} target={link.target}>
          {link.title}
        </PrimaryButton>
      ))}
    </ul>
  );

  const landingHeight = "h-[80vh]";

  return (
    <div>
      <div className={twMerge(landingHeight)}>
        <div
          className={twMerge(
            landingHeight,
            "absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-khoury-blue via-khoury-cyan to-khoury-teal"
          )}
        >
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="flex flex-col justify-center items-center gap-4 bg-khoury-light dark:bg-khoury-dark w-full pt-6 pb-8 shadow-2xl">
              {header}
              <p className="italic text-khoury-dark dark:text-khoury-light drop-shadow-md cursor-default">
                {strings.home.tagline}
              </p>
              {menu}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-khoury-light dark:bg-khoury-dark flex flex-col items-center">
        <div className="max-w-3xl w-full my-16">
          <h1 className="">
            What's Kaleidoscope?
          </h1>
          <p className="">
            Kaleidoscope is a club for other Khoury Clubs! We're a collection of
            programs to help you build the best clubs you can for students at
            Khoury. To do this, we provide a variety of ways to connect you with
            students, additional resources, employers, and other clubs.
          </p>

          <h1></h1>
        </div>
      </div>
    </div>
  );
}
