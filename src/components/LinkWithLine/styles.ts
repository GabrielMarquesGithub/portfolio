import styled, { css } from "styled-components";

import { Link } from "../Link";

export const Container = styled(Link)`
  ${({
    theme: {
      spacing,
      transition,
      border,
      colors: { brand },
    },
  }) => css`
    height: ${spacing(30)};

    display: flex;
    align-items: center;

    position: relative;

    // Actions
    &:hover {
      &::after {
        width: 100%;
      }
    }

    // Children
    & * + * {
      margin-left: ${spacing(5)};
    }

    &::after {
      content: "";

      width: 0%;
      height: ${border.weight.base};

      position: absolute;
      left: 0;
      bottom: 0;

      background-color: ${brand.primary};

      transition: ${transition.slow};
    }
  `}
`;
