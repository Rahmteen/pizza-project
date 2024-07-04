import { extendTheme } from "@chakra-ui/react";

export const defaultTheme = extendTheme({
  colors: {
    p: {
      100: "#F4F1DE", // eggshell
      200: "#E07A5F", // burnt sienna
      300: "#3D405B", // delft blue
      400: "#81B29A", // cambridge blue
      500: "#F2CC8F", // sunset
      600: "#EAB69F", // apricot
      700: "#664F5C", // eggplant
      800: "#BABF95", // sage
    },
  },
  fonts: {
    bricolage: "'Bricolage Grotesque Variable', sans-serif",
    inter: "'Inter Variable', sans-serif",
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        height: "100%",
        minHeight: "100vh",
        minWidth: "100vw",
        overflowX: "hidden",
        background: "p.400",
        overscrollBehavior: "none !important",
      },
      ".box-shadow-1": {
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
    }),
  },
});
