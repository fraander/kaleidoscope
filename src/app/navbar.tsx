import Link from "next/link";
import { strings } from "./utils/strings";

export default function Navbar() {
  return (
    <header className="p-3 border-b">
      <Link href="/" className="flex items-center space-x-2">
        <img src="/kaleidoscope-640.png" alt="kaleidoscope logo" className="w-7 h-7 drop-shadow-md" />
        <div className="font-bold text-lg text-khoury-blue">{strings.home.club_name}</div>
      </Link>
    </header>
  );
}
