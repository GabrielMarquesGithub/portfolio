import { ImgHTMLAttributes } from "react";

export type IImageStyleProps = {
  $width?: "full" | "auto";
  $height?: "full" | "auto";
  $objectFit?: "cover" | "contain" | "fill";
};

export type IImageProps = IImageStyleProps &
  Pick<ImgHTMLAttributes<HTMLImageElement>, "onLoad" | "title"> &
  Required<Pick<ImgHTMLAttributes<HTMLImageElement>, "alt" | "src">>;
