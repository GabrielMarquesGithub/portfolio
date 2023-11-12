import styled, { css, DefaultTheme } from "styled-components";

import { IIconStyleProps } from "./types";

const getSize = (size: IIconStyleProps["$size"], { spacing }: DefaultTheme) => {
  let rem = 20;

  if (typeof size === "number") {
    rem = size;
  }

  if (typeof size !== "number") {
    if (size)
      switch (size) {
        case "small":
          rem = 15;
          break;
        case "base":
          rem = 20;
          break;
        case "big":
          rem = 25;
          break;
        case "huge":
          rem = 30;
          break;
      }
  }

  return css`
    & svg,
    & path {
      max-height: ${spacing(rem)};
      max-width: ${spacing(rem)};
    }
  `;
};

export const Container = styled.span<IIconStyleProps>`
  ${({
    $color,
    $size = "base",
    $rotate,
    theme,
    theme: {
      colors: { brand, semantic, text },
    },
  }) => css`
    // Sizes
    ${getSize($size, theme)}

    display: flex;
    align-items: center;
    justify-content: center;

    // Colors
    ${$color &&
    css`
      svg,
      svg * {
        fill: ${Object.assign(brand, semantic, text)[$color]};
      }
    `}

    // Transform
    ${$rotate &&
    css`
      transform: rotate(${$rotate}deg);
    `}
  `}
`;
