import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({
    theme: {
      spacing,
      border,
      colors: { brand, background },
    },
  }) => css`
    height: ${spacing(80)};
    border-top: ${border.weight.base} solid ${brand.primary};

    background-color: ${background.inverted};
  `}
`;
