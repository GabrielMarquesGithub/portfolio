import styled, { css } from "styled-components";

import { IHeaderProps, ILinksSectionStyleProps } from "./types";

export const Header = styled.header<IHeaderProps>`
  ${({
    $hasDivider,
    theme: {
      spacing,
      border,
      transition,
      breakpoint,
      colors: { brand, background },
    },
  }) => css`
    height: ${spacing(60)};
    padding: 0 ${spacing(100)};
    border-bottom: ${border.weight.thin} solid transparent;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    background-color: ${background.primary};

    transition: ${transition.normal};

    // State
    ${$hasDivider &&
    css`
      border-bottom-color: ${brand.primary};
    `}

    // Children
    button {
      z-index: 3;
      visibility: hidden;
      opacity: 0;
    }

    // Break
    @media ${breakpoint.md} {
      padding: 0 ${spacing(10)};

      // Children
      button {
        visibility: visible;
        opacity: 1;
      }
    }
  `}
`;

export const LinksSection = styled.section<ILinksSectionStyleProps>`
  ${({
    $visible,
    theme: {
      spacing,
      breakpoint,
      transition,
      colors: { background },
    },
  }) => css`
    display: flex;
    gap: ${spacing(20)};

    transition: ${transition.normal};

    @media ${breakpoint.md} {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      flex-direction: column;
      justify-content: center;
      align-items: center;
      visibility: hidden;
      opacity: 0;

      background-color: ${background.primary};

      //State
      ${$visible &&
      css`
        visibility: visible;
        opacity: 1;
      `}
    }
  `}
`;
