"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function SidebarButton({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={`block font-medium px-2 py-1 hover:bg-gray-100 rounded-md ${isActive && "bg-gray-200"}`}
    >
      {children}
    </Link>
  );
}
