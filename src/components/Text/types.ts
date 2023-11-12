import { HTMLAttributes, CSSProperties } from "react";

import { ITheme } from "../../assets/theme/theme";

export type ITextStyleProps = {
  $lineLimit?: number;
  $weight?: keyof ITheme["typography"]["fontWeight"];
  $color?: keyof ITheme["colors"]["text"];
  $font?: keyof ITheme["typography"]["fontFamily"];
  $size?:
    | keyof ITheme["typography"]["fontSize"]
    | (keyof ITheme["typography"]["fontSize"])[];
  $decoration?: "underline";
  $hover?: boolean;
  $align?: CSSProperties["textAlign"] | CSSProperties["textAlign"][];
};

export type ITextProps = ITextStyleProps &
  Pick<HTMLAttributes<HTMLParagraphElement>, "children" | "style"> & {
    is: "p" | "span" | "h1" | "h2" | "h2" | "h3" | "h4" | "h5" | "h6";
    readHTML?: boolean;
  };
