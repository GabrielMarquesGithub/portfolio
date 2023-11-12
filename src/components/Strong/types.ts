import { HTMLAttributes } from "react";

import { ITheme } from "../../assets/theme/theme";

export type IStrongStyleProps = {
  $weight?: keyof ITheme["typography"]["fontWeight"];
  $highlighted?: boolean;
  $decoration?: "underline";
};

export type IStrongProps = IStrongStyleProps &
  Pick<HTMLAttributes<HTMLParagraphElement>, "children"> & {
    is: "b" | "strong";
  };
