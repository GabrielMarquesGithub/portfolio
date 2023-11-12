import { ButtonHTMLAttributes } from "react";

export type IButtonStyleProps = {
  $size?: "base" | "small";
  $shape?: "full" | "square";
  $variant?: "fill" | "transparent";
};

export type IButtonProps = IButtonStyleProps &
  Required<
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "aria-label">
  > &
  Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "disabled" | "onClick" | "aria-expanded" | "title"
  > & {
    role: "submit" | "button" | "link";
  };
