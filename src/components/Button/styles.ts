import styled, { css, DefaultTheme } from "styled-components";

import { IButtonStyleProps } from "./types";

const getHeight = (
  size: IButtonStyleProps["$size"],
  square: boolean,
  { spacing }: DefaultTheme
) => {
  let rem = 50;

  switch (size) {
    case "small":
      rem = 40;
      break;
  }

  return css`
    height: ${spacing(rem)};
    width: ${square ? spacing(rem) : undefined};
  `;
};

export const Button = styled.button<IButtonStyleProps>`
  ${({
    $size,
    $shape,
    $variant = "fill",
    theme,
    theme: {
      colors: { brand, translucentBackground },
      spacing,
      transition,
      filter,
    },
  }) => css`
    // Sizes
    ${getHeight($size, $shape === "square", theme)}

    padding: 0 ${spacing(15)};
    border: none;

    overflow: hidden;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    background-color: ${$variant === "fill" ? brand.primary : "transparent"};

    user-select: none;
    cursor: pointer;

    transition: ${transition.slow};

    // States
    &:hover {
      ${$variant === "fill" &&
      css`
        filter: ${filter.brightness.light};
      `};
      ${$variant === "transparent" &&
      css`
        background-color: ${translucentBackground.inverted};
      `};
    }

    &:disabled {
      filter: ${filter.brightness.dark};
      cursor: default;
    }

    ${$shape === "full" &&
    css`
      width: 100%;
    `}

    // Children
    * + * {
      margin-left: ${spacing(10)};
    }
  `}
`;
