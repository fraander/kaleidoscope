import { ReactNode } from "react";
import { twMerge } from "../utils/twMerge";

type Props = {
   width?: string
  children?: ReactNode;
};

const PrimaryButton = ({ width, children }: Props): ReactNode => {
  return (
    <div className={twMerge("p-2 px-4 mx-2 rounded-lg bg-khoury-dark text-khoury-light drop-shadow-md transition-all duration-200 hover:scale-110 hover:drop-shadow-xl hover:font-bold hover:bg-gradient-to-b from-khoury-blue to-khoury-dark cursor-pointer", (width ?? ""))}>
      {children}
    </div>
  );
};

export default PrimaryButton;
