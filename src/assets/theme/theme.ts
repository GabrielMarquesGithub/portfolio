// Utilitárias
const spacing = (factor: number) => `${factor / 10}rem`;
const breakpoint = (type: "min" | "max", value: number) => {
  const unit = type === "max" ? "max-width" : "min-width";
  return `(${unit}: ${value}px)`;
};

// Tema
const theme = {
  colors: {
    translucentBackground: { inverted: "rgba(39, 38, 38, 0.2)" },
    background: {
      primary: "#EAEAEA",
      secondary: "#CCD1D1",
      highlighted: "#FFFFFF",
      inverted: "#272626",
    },
    text: {
      light: "#272626",
      dark: "#FFFFFF",
      brand: "#FFFFFF",
    },
    icon: {
      light: "#272626",
      brand: "#FFFFFF",
    },
    brand: {
      primary: "#C5283D",
    },
    semantic: {
      success: "#00CC66",
      error: "#DF2935",
      info: "#3772FF",
    },
  },
  typography: {
    fontFamily: {
      normal: "'Roboto', sans-serif",
      style: "'Raleway', sans-serif",
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    fontSize: {
      small: spacing(12),
      base: spacing(16),
      big: spacing(20),
      huge: spacing(24),
    },
  },
  border: {
    weight: {
      thin: "1px",
      base: "2px",
      thick: "3px",
    },
  },
  borderRadius: {
    base: "10px",
    full: "100%",
  },
  transition: {
    fast: "100ms",
    normal: "200ms",
    slow: "400ms",
  },
  filter: {
    brightness: {
      light: "brightness(1.2)",
      dark: "brightness(0.8)",
    },
    blur: "blur(10px)",
  },
  opacity: {
    low: 0.5,
    medium: 0.7,
    high: 0.9,
  },
  shadow: {
    low: "0 2px 4px rgba(0, 0, 0, 0.1)",
    high: "0 4px 7px rgba(0, 0, 0, 0.2)",
  },
  breakpoint: {
    sm: breakpoint("max", 600),
    md: breakpoint("max", 900),
    bg: breakpoint("max", 1200),
  },
  spacing,
};

export default theme;

export type ITheme = typeof theme;

// Sobrescrevendo o tema do styled-components
declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
