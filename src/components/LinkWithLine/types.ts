import { IIconProps } from "../Icon/types";
import { ILinkProps } from "../Link/types";

export type ILinkWithLineProps = Pick<
  ILinkProps,
  "href" | "aria-label" | "children" | "onClick" | "download"
> &
  Partial<Pick<IIconProps, "icon">> & {
    IconAriaLabel?: IIconProps["aria-label"];
  };
