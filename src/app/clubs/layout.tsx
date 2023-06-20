import { ReactNode } from "react";
import Navbar from "../navbar";
import Link from "next/link";
import { strings } from "../utils/strings";
import SidebarButton from "./sidebar-button";

export default async function ClubsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="md:[--sidebar-length:250px]">
      <Navbar />
      <div className="flex">
        <aside className="w-[--sidebar-length] p-3 space-y-1">
          {strings.home.links.map((link) => {
            return <SidebarButton href={link.destination}>{link.title}</SidebarButton>;
          })}
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
}
