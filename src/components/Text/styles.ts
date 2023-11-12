import styled, { css } from "styled-components";

import { getCorrectResponsivePropValue } from "../../utils/getCorrectResponsivePropValue";

import { ITextStyleProps } from "./types";

export const Text = styled.p<ITextStyleProps>`
  ${({
    $color = "light",
    $font = "normal",
    $size = "base",
    $weight = "normal",
    $lineLimit,
    $hover,
    $decoration,
    $align,
    theme: {
      colors: { text, brand },
      typography: { fontFamily, fontSize, fontWeight },
      transition,
    },
  }) => css`
    height: min-content;

    color: ${text[$color]};

    font-size: ${fontSize[getCorrectResponsivePropValue($size)]};
    font-family: ${fontFamily[$font]};
    font-weight: ${fontWeight[$weight]};

    ${$align &&
    css`
      text-align: ${getCorrectResponsivePropValue($align)};
    `}

    // Decoration
    ${$decoration &&
    css`
      text-decoration: underline;
    `}

    // $lineLimit
    ${$lineLimit &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: ${$lineLimit};
    `}

    // Actions
    ${$hover &&
    css`
      transition: ${transition.normal};
      &:hover {
        color: ${brand.primary};

        * {
          color: ${brand.primary};
        }
      }
    `}
  `}
`;
