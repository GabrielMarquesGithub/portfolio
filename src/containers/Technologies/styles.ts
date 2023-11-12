import styled, { css, keyframes } from "styled-components";

import { IImagesContainerStyleProps } from "./types";

const slideAnimation = (width: number) => keyframes`
0%{
  transform: translateX(0px);
}
50%{
  transform: translateX(-${width}px);
}
100%{
  transform: translateX(0px);
}
`;

export const Container = styled.section`
  overflow: hidden;
`;

export const ImagesContainer = styled.div<IImagesContainerStyleProps>`
  ${({ $overflowWidth, $animationTime, theme: { spacing } }) => css`
    display: flex;
    gap: ${spacing(40)};

    animation: ${$animationTime}s ${slideAnimation($overflowWidth)} infinite;
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme: { spacing } }) => css`
    height: ${spacing(50)};
    width: auto;

    display: flex;
    align-items: center;
  `}
`;
