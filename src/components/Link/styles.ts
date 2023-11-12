import styled, { css } from "styled-components";

import { ILinkStyleProps } from "./types";

export const Link = styled.a<ILinkStyleProps>`
  ${({ $disable }) => css`
    text-decoration: none;

    // State
    ${$disable &&
    css`
      pointer-events: none;
    `}
  `}
`;
