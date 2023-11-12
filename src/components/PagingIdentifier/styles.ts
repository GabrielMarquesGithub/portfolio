import styled, { css } from "styled-components";

import { IIndicatorStyleProps } from "./types";

export const Container = styled.div`
  ${({ theme: { spacing } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${spacing(5)};
  `}
`;

export const Indicator = styled.span<IIndicatorStyleProps>`
  ${({
    $active,
    theme: {
      spacing,
      borderRadius,
      border,
      transition,
      colors: { brand },
    },
  }) => css`
    height: ${spacing(20)};
    width: ${spacing(20)};
    border: ${border.weight.thick} solid ${brand.primary};

    display: flex;
    justify-content: center;
    align-items: center;

    // Children
    &,
    span {
      border-radius: ${borderRadius.full};
    }

    span {
      height: 60%;
      width: 60%;

      visibility: hidden;
      opacity: 0;

      display: block;

      background: ${brand.primary};

      transition: ${transition.fast};
    }

    // States
    ${$active &&
    css`
      span {
        visibility: visible;
        opacity: 1;
      }
    `}
  `}
`;
