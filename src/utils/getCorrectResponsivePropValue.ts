import { useMediaQueryArray } from "../hooks/useMediaQueryArray";

export const getCorrectResponsivePropValue = <T>(value: T | T[]) => {
  if (Array.isArray(value)) {
    const { getValueForScreenSize } = useMediaQueryArray({});
    return getValueForScreenSize(value);
  }
  return value;
};
