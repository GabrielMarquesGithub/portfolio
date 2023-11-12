import styled, { css } from "styled-components";

import { ICarouselStyleProps } from "./types";

export const Carousel = styled.section<ICarouselStyleProps>`
  ${({
    $itemsNumber,
    $translate,
    theme: { spacing, breakpoint, transition },
  }) => css`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(${$itemsNumber}, 50%);

    transform: translateX(${$translate}%);

    transition: ${transition.slow};

    // Children
    & > * {
      margin: 0 ${spacing(20)};
    }

    // Break
    @media ${breakpoint.md} {
      grid-template-columns: repeat(${Math.floor($itemsNumber)}, 100%);
    }

    @media ${breakpoint.sm} {
      grid-template-columns: repeat(${Math.floor($itemsNumber / 2)}, 100%);
      grid-template-rows: repeat(2, auto);
      row-gap: ${spacing(10)};
    }
  `}
`;

export const CarouselContainer = styled.section`
  ${({ theme: { spacing } }) => css`
    max-width: ${spacing(900)};
    width: 100%;
    height: 100vh;
    margin: 0 auto;

    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${spacing(20)};
  `}
`;

export const Footer = styled.footer`
  ${({ theme: { spacing, breakpoint } }) => css`
    width: 100%;
    padding: 0 ${spacing(20)};

    display: flex;
    justify-content: flex-end;
    align-items: center;

    // Break
    @media ${breakpoint.md} {
      justify-content: center;
    }
  `}
`;

export const Header = styled.header`
  ${({ theme: { spacing } }) => css`
    width: 100%;
    padding: 0 ${spacing(20)};

    display: flex;
    justify-content: flex-end;
  `}
`;
