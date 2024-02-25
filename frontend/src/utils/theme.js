import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const sizes = {
  sizes: {
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  colors: {
    blue: {
      600: "#2587e4",
      900: "#060d12",
    },
    grey: {
      500: "#9ebaf0",
      200: "#eef0f1",
    },
    white: {
      100: "#ffff",
    },
  },
};

const theme = extendTheme({ sizes });
export default theme;
