import styled, { css } from "styled-components";

export const ContactBar = styled.aside`
  ${({
    theme: {
      transition,
      spacing,
      breakpoint,
      colors: { brand },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing(10)};

    position: fixed;
    z-index: 2;
    top: ${spacing(80)};
    left: ${spacing(20)};

    // Custom
    .contact-icon {
      transition: ${transition.normal};

      // Actions
      &:hover {
        transform: scale(1.1);

        &.email-icon rect {
          fill: #ddb51b;
        }
        &.github-icon rect {
          fill: #010409;
        }
        &.linkedin-icon rect {
          fill: #0a66c2;
        }
        &.whatsapp-icon rect {
          fill: #0dc143;
        }
      }

      // Children
      rect {
        transition: ${transition.normal};

        fill: ${brand.primary};
      }
    }

    // Break
    @media ${breakpoint.md} {
      flex-direction: row;
    }
  `}
`;
