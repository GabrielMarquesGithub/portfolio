import { useEffect } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "./useMediaQuery";

type IUseMediaQueryArrayProps = {
  onResize?: () => void;
};

const useMediaQueryArray = ({ onResize }: IUseMediaQueryArrayProps) => {
  const theme = useTheme();

  const breakpoints = Object.values(theme.breakpoint);
  const matches = breakpoints.map((breakpoint) => useMediaQuery(breakpoint));

  const getValueForScreenSize = <T>(values: T[]) => {
    if (!values || !values.length) throw new Error("There are no values");

    let index = matches.findIndex((match) => match === true);

    if (index === -1 || index > values.length - 1) {
      if (values.length >= matches.length) return values[matches.length - 1];
      if (values.length < matches.length) return values[values.length - 1];
    }

    return values[index];
  };

  useEffect(() => {
    if (onResize) onResize();
  }, [matches.toString()]);

  return { getValueForScreenSize };
};

export { useMediaQueryArray };
