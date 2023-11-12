import styled, { css } from "styled-components";

import { getCorrectResponsivePropValue } from "../../utils/getCorrectResponsivePropValue";

import { IGridLayoutContainerStyleProps } from "./types";

const getGridConfig = (
  columns: IGridLayoutContainerStyleProps["$columns"] = 1,
  gap: IGridLayoutContainerStyleProps["$gap"]
) => {
  let rem = 0;
  let currentColumns = getCorrectResponsivePropValue(columns);

  switch (gap) {
    case "small":
      rem = 2.5;
      break;
    case "big":
      rem = 5;
      break;
  }

  return css`
    grid-template-columns: repeat(
      ${currentColumns},
      calc(${100 / currentColumns}% - ${rem / currentColumns}%)
    );
    gap: ${rem}%;
  `;
};

export const Container = styled.div<IGridLayoutContainerStyleProps>`
  ${({ $gap, $columns, theme: { spacing }, $rows }) => css`
    max-width: ${spacing(900)};
    height: 100vh;
    padding: 0 ${spacing(20)};
    margin: 0 auto;

    display: grid;
    align-content: center;
    grid-template-rows: ${getCorrectResponsivePropValue($rows)};
    ${getGridConfig($columns, $gap)}
  `}
`;
