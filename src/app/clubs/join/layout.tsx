import { ReactNode } from "react";

export default async function JoinClubsLayout({ children }: { children: ReactNode }) {
  return <div className="p-3 md:py-5 md:mx-auto md:max-w-[75ch]">{children}</div>;
}
