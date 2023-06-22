import ColorVariant from "../types/ColorVariant";
import strings from "../utils/strings";
import { twMerge } from "../utils/twMerge";

type Props = {
  variant?: ColorVariant.LIGHT | ColorVariant.DARK | undefined;
  size?: string;
  cursor?: string;
  textSize?: string;
};

export default function Logomark({ variant, size, cursor, textSize }: Props) {
  const colorStyles = () => {
    switch (variant) {
      case ColorVariant.LIGHT:
        return "brightness-0 invert";
      case ColorVariant.DARK:
        return "brightness-0";
      default:
        return "";
    }
  };

  const textStyles = () => {
    switch (variant) {
      case ColorVariant.LIGHT:
        return "text-khoury-light";
      case ColorVariant.DARK:
        return "text-khoury-dark";
      default:
        return "text-khoury-blue";
    }
  };

  const sizeStyles = () => {
    if (size) {
      return `w-${size} h-${size}`;
    } else {
      return "w-16 h-16";
    }
  };

  const cursorStyles = () => {
   return cursor ?? "cursor-default"
  }

  const textSizeStyles = () => {
   return textSize ?? "text-3xl"
  }

  return (
    <div className="flex flex-row items-center justify-center">
      <img
        src="kaleidoscope-640.png"
        alt="kaleidoscope logo"
        className={twMerge("drop-shadow-md", colorStyles(), sizeStyles(), cursorStyles())}
      />
      <h1
        className={twMerge(
          "font-bold drop-shadow-md",
          textStyles(),
          cursorStyles(),
          textSizeStyles()
        )}
      >
        {strings.home.club_name}
      </h1>
    </div>
  );
}
