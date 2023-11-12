import { IIconProps } from "../Icon/types";
import { ILinkProps } from "../Link/types";

export type IIconLinkProps = Pick<IIconProps, "$color" | "icon" | "className"> &
  Pick<ILinkProps, "href"> & {
    IconAriaLabel: ILinkProps["aria-label"];
    linkAriaLabel: ILinkProps["aria-label"];
  };
