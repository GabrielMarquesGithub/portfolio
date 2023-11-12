import styled, { css } from "styled-components";

export const Main = styled.main`
  ${({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing(100)};
  `}
`;
