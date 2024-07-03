import { extendTheme } from "@chakra-ui/react";

export const defaultTheme = extendTheme({
  colors: {
    p: {
      100: "#CB997E",
      200: "#EDDCD2",
      300: "#FFF1E6",
      400: "#F0EFEB",
      500: "#DDBEA9",
      600: "#A5A58D",
      700: "#B7B7A4",
    },
  },
  fonts: {
    bricolage: "'Bricolage Grotesque Variable', sans-serif",
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        height: "100%",
        minHeight: "100vh",
        minWidth: "100vw",
        overflowX: "hidden",
        overscrollBehavior: "none !important",
      },
    }),
  },
});
