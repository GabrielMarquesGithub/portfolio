import { ReactNode, HTMLAttributes } from "react";

import { ITheme } from "../../assets/theme/theme";

export type IIconStyleProps = {
  $size?: "small" | "base" | "big" | "huge" | number;
  $color?: keyof (ITheme["colors"]["semantic"] &
    ITheme["colors"]["brand"] &
    ITheme["colors"]["text"]);
  $rotate?: number;
};

export type IIconProps = IIconStyleProps &
  Required<Pick<HTMLAttributes<HTMLSpanElement>, "aria-label">> &
  Pick<HTMLAttributes<HTMLSpanElement>, "className"> & {
    icon: ReactNode;
  };
