import styled, { css } from "styled-components";

import { ICentralizationLayoutContainerStyleProps } from "./types";

export const Container = styled.div<ICentralizationLayoutContainerStyleProps>`
  ${({ $fullHeight, $fullWidth }) => css`
    max-height: 100%;
    width: ${$fullWidth ? "100%" : "min-content"};
    height: ${$fullHeight ? "100%" : "min-content"};

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
