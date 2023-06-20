import React from "react";
import { strings } from "./utils/strings";
import Link from "next/link";

export default function Home() {
  const items = [0, 1, 2, 3];
  const circle = (
    <span className="bg-khoury-light h-8 w-8 rounded-full shadow-md inline-block"></span>
  );
  const circleGrid = (
    <div className="flex flex-col gap-6 p-2">
      {items.map((i) => {
        return (
          <div className="flex flex-row gap-6">{items.map((i) => circle)}</div>
        );
      })}
    </div>
  );

  const header = (
    <div className="flex flex-row items-center justify-center">
      <img
        src="kaleidoscope-640.png"
        alt="kaleidoscope logo"
        className="w-16 h-16 drop-shadow-md"
      />
      <h1 className="text-3xl font-bold text-khoury-blue drop-shadow-md cursor-default">
        {strings.home.club_name}
      </h1>
    </div>
  );

  const menu = (
    <ul className="flex flex-row">
      {strings.home.links.map((link, index) => (
        <li
          className={
            "p-2 px-4 mx-2 rounded-lg bg-khoury-dark text-khoury-light drop-shadow-md transition-all duration-200 hover:scale-110 hover:drop-shadow-xl hover:font-bold hover:bg-gradient-to-b from-khoury-blue to-khoury-dark cursor-pointer"
          }
        >
          <Link href={link.destination}>{link.title}</Link>
        </li>
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
