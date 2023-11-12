import { HTMLAttributes, CSSProperties } from "react";

export type IGridLayoutContainerStyleProps = {
  $columns?: number | number[];
  $gap?: "small" | "big";
  $rows?:
    | CSSProperties["gridTemplateRows"]
    | CSSProperties["gridTemplateRows"][];
};

export type IGridLayoutContainerProps = IGridLayoutContainerStyleProps &
  Pick<HTMLAttributes<HTMLDivElement>, "children" | "id"> & {
    is?: "div" | "section";
  };
