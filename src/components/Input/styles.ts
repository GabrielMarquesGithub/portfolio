import styled, { css } from "styled-components";

import { IInputStyleProps } from "./types";

export const Input = styled.input<IInputStyleProps>`
  ${({
    $error,
    theme: {
      colors: { text, semantic, brand },
      typography: { fontFamily, fontWeight, fontSize },
      spacing,
      border,
      borderRadius,
      transition,
      opacity,
      filter,
    },
  }) => css`
    height: ${spacing(50)};
    padding: 0 ${spacing(15)};
    border: ${border.weight.base} solid ${brand.primary};
    outline: none;
    border-radius: ${borderRadius.base};

    background-color: transparent;

    font-family: ${fontFamily.normal};
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.base};
    color: ${text.light};

    transition: ${transition.normal};

    // Special
    &::placeholder {
      font-family: ${fontFamily.normal};
      font-weight: ${fontWeight.normal};
      font-size: ${fontSize.base};
      color: ${text.light};
      opacity: ${opacity.low};
    }

    // States
    &:focus {
      filter: ${filter.brightness.light};
    }

    &:hover {
      filter: ${filter.brightness.light};
    }

    ${$error &&
    css`
      border-color: ${semantic.error};
    `}
  `}
`;
