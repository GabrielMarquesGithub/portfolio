import { InputHTMLAttributes } from "react";

export type IInputStyleProps = {
  $error?: boolean;
};

export type IInputProps = IInputStyleProps &
  Required<Pick<InputHTMLAttributes<HTMLInputElement>, "type" | "aria-label">> &
  Pick<InputHTMLAttributes<HTMLInputElement>, "onChange" | "placeholder">;
