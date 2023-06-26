import ColorVariant from "../types/ColorVariant";
import LogomarkElement from "../types/LogomarkElement";
import strings from "../utils/strings";
import { twMerge } from "../utils/twMerge";

type Props = {
  variant?: ColorVariant.LIGHT | ColorVariant.DARK | undefined;
  size?: string;
  cursor?: string;
  textSize?: string;
  elements?: LogomarkElement.LOGO | LogomarkElement.TEXT | undefined;
};

export default function Logomark({
  variant,
  size,
  cursor,
  textSize,
  elements,
}: Props) {
  const colorStyles = (() => {
    switch (variant) {
      case ColorVariant.LIGHT:
        return "brightness-0 invert";
      case ColorVariant.DARK:
        return "brightness-0";
      default:
        return "";
    }
  })();

  const textStyles = (() => {
    switch (variant) {
      case ColorVariant.LIGHT:
        return "text-khoury-light";
      case ColorVariant.DARK:
        return "text-khoury-dark";
      default:
        return "text-khoury-blue dark:text-khoury-cyan";
    }
  })();

  const sizeStyles = size ? `w-${size} h-${size}` : "w-16 h-16";

  const cursorStyles = cursor ?? "cursor-default";

  const textSizeStyles = textSize ?? "text-3xl";

  const elementStylesLogo = elements === LogomarkElement.TEXT ? "hidden" : "";

  const elementStylesText = elements === LogomarkElement.LOGO ? "hidden" : "";
  return (
    <div className="flex flex-row items-center justify-center">
      <img
        src="kaleidoscope-640.png"
        alt="kaleidoscope logo"
        className={twMerge(
          "drop-shadow-md",
          colorStyles,
          sizeStyles,
          cursorStyles,
          elementStylesLogo
        )}
      />
      <span
        className={twMerge(
          "font-bold drop-shadow-md",
          textStyles,
          cursorStyles,
          textSizeStyles,
          elementStylesText
        )}
      >
        {strings.home.club_name}
      </span>
    </div>
  );
}
