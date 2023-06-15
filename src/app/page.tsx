import React from "react";
import { strings } from "./utils/strings";

export default function Home() {
  const items = [0, 1, 2, 3];
  const circle = (
    <div className="bg-khoury-light h-8 w-8 rounded-full shadow-md"></div>
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
        className="w-20 h-20 drop-shadow-md"
      />
      <h1 className="text-3xl font-bold text-khoury-blue drop-shadow-md cursor-default">
        {strings.home.club_name}
      </h1>
    </div>
  );

  const menu = (
    <ul>
      {strings.home.links.map((link, index) => (
        <li
          className={
            "list-[square] text-khoury-secondary drop-shadow-md hover:translate-x-3 transition-all duration-200 hover:scale-110 hover:drop-shadow-xl hover:font-bold hover:text-khoury-blue"
          }
        >
          <a href={link.destination}>{link.title}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-khoury-blue via-khoury-cyan to-khoury-teal">
      <div className="absolute left-0">{circleGrid}</div>
      <div className="absolute right-0 bottom-0">{circleGrid}</div>
      <div className="flex flex-col justify-center items-center gap-2 w-full h-full">
        <div className="flex flex-col justify-center items-center gap-2 bg-white w-full py-8 shadow-2xl">
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
