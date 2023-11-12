import styled, { css } from "styled-components";

import { IStrongStyleProps } from "./types";

export const Strong = styled.strong<IStrongStyleProps>`
  ${({
    $weight = "bold",
    $highlighted = false,
    $decoration,
    theme: {
      colors: { brand },
      typography: { fontWeight },
    },
  }) => css`
    font-weight: ${fontWeight[$weight]};

    // Highlighted
    ${$highlighted &&
    css`
      color: ${brand.primary};
    `}

    // Decoration
    ${$decoration &&
    css`
      text-decoration: underline;
    `}
  `}
`;
