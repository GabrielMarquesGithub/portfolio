import { AnchorHTMLAttributes } from "react";

export type ILinkStyleProps = {
  $disable?: boolean;
};

export type ILinkProps = ILinkStyleProps &
  Pick<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "target" | "onClick" | "download"
  > &
  Required<
    Pick<
      AnchorHTMLAttributes<HTMLLinkElement>,
      "children" | "aria-label" | "href"
    >
  >;
