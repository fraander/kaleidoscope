import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

export default function ManageClubLayout({ children }: { children: ReactNode }) {
  return <Sidebar>{children}</Sidebar>;
}
