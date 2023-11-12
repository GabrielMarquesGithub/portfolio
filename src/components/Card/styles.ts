import styled, { css } from "styled-components";

import { IContentContainerStyleProps } from "./types";

export const Container = styled.div`
  ${({ theme: { shadow, transition } }) => css`
    max-width: 100%;
    box-shadow: ${shadow.low};

    position: relative;
    overflow: hidden;

    display: flex;

    transition: ${transition.normal};

    & > img {
      transition: ${transition.slow};
    }

    &:hover {
      box-shadow: ${shadow.high};

      & > img {
        transform: scale(1.1);
      }
    }
  `}
`;

export const Content = styled.section`
  ${({ theme: { spacing } }) => css`
    height: calc(100% - ${spacing(40)});
    padding: ${spacing(5)} ${spacing(20)};

    opacity: 0;
    visibility: hidden;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
  `}
`;

export const ActionContainer = styled.div`
  ${({ theme: { transition } }) => css`
    display: flex;

    // Children
    & > :last-child span {
      transition: ${transition.slow};

      transform: rotate(-45deg);
    }
  `}
`;

export const ContentContainer = styled.section<IContentContainerStyleProps>`
  ${({
    open,
    theme: {
      spacing,
      transition,
      colors: { background },
    },
  }) => css`
    width: 70%;
    height: 100%;

    position: absolute;
    top: calc(100% - ${spacing(40)});
    right: 15%;

    background-color: ${background.primary};

    transition: ${transition.slow};

    // State
    ${open &&
    css`
      width: 100%;

      top: 0%;
      right: 0%;

      //Children
      ${Content} {
        opacity: 1;
        visibility: visible;

        transition: ${transition.slow} ${transition.slow};
      }

      ${ActionContainer} {
        // Children
        & > :last-child span {
          transform: rotate(0deg);
        }
      }
    `}
  `}
`;

export const Title = styled.section`
  ${({ theme: { spacing } }) => css`
    height: ${spacing(40)};
    padding-left: ${spacing(20)};

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const TextContainer = styled.div`
  ${({ theme: { spacing } }) => css`
    height: calc(100% - ${spacing(45)});
    padding-right: ${spacing(5)};

    overflow: auto;
  `}
`;

export const ImagesContainer = styled.div`
  ${({ theme: { spacing } }) => css`
    height: ${spacing(35)};
    padding-bottom: ${spacing(5)};

    overflow-x: auto;

    display: flex;
    gap: ${spacing(2)};
  `}
`;
