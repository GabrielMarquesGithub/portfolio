import { HTMLAttributes } from "react";

export type ICentralizationLayoutContainerStyleProps = {
  $fullHeight?: boolean;
  $fullWidth?: boolean;
};

export type ICentralizationLayoutContainerProps =
  ICentralizationLayoutContainerStyleProps &
    Pick<HTMLAttributes<HTMLDivElement>, "children"> & {
      is?: "div" | "section";
    };
