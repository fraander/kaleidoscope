import { ReactNode } from "react";
import { twMerge } from "../utils/twMerge";
import Link, { LinkProps } from "next/link";

type Props = {
  width?: string;
  href: string;
  target?: string;
  children?: ReactNode;
};

const PrimaryButton = ({ width, href, target, children }: Props): ReactNode => {
  return (
    <Link
      href={href}
      target={target}
      className={twMerge(
        "p-2 px-4 mx-2 rounded-lg bg-khoury-dark dark:bg-khoury-blue text-khoury-light drop-shadow-md transition-all duration-200 hover:scale-110 hover:drop-shadow-xl hover:font-bold hover:bg-gradient-to-b from-khoury-blue to-khoury-dark cursor-pointer dark:hover:bg-khoury-secondary",
        width ?? ""
      )}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
