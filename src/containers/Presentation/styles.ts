import styled, { css } from "styled-components";

import { Container as CentralizationLayoutContainer } from "../../components/CentralizationLayoutContainer/styles";

export const PresentationCentralizationLayoutContainer = styled(
  CentralizationLayoutContainer
)`
  ${({ theme: { breakpoint } }) => css`
    // Break
    @media ${breakpoint.md} {
      height: min-content;
      width: 100%;
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing(20)};
  `}
`;

export const LettersContainer = styled.div`
  display: flex;
`;
