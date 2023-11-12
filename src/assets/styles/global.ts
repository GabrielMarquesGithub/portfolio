import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset de estilos */
  *, body,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }
  
  /* Estilos globais */
  ${({
    theme: {
      spacing,
      borderRadius,
      colors: { background, brand },
    },
  }) => css`
    /* Estilizando scroll */
    body::-webkit-scrollbar {
      width: ${spacing(10)};
      height: ${spacing(10)};
    }

    *::-webkit-scrollbar {
      width: ${spacing(5)};
      height: ${spacing(5)};
    }

    *::-webkit-scrollbar-track {
      background-color: ${background.secondary};

      // Evitando o radius no scroll do body
      &:not(body) {
        border-radius: ${borderRadius.base};
      }
    }

    *::-webkit-scrollbar-thumb {
      border-radius: ${borderRadius.base};

      background-color: ${brand.primary};
    }

    html,
    body {
      background-color: ${background.primary};

      // Suavizando o scroll
      scroll-behavior: smooth;
    }
  `}
`;

export default GlobalStyle;
