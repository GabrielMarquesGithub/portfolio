import styled, { css } from "styled-components";

import { IImageStyleProps } from "./types";

const size = {
  auto: "auto",
  full: "100%",
};

export const Image = styled.img<IImageStyleProps>`
  ${({ $height = "full", $width = "full", $objectFit }) => css`
    height: ${size[$height]};
    width: ${size[$width]};
    object-fit: ${$objectFit};
  `}
`;
