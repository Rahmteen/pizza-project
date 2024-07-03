import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { defaultTheme } from "@/theme";
import App from "@/App";

import "@fontsource-variable/bricolage-grotesque";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <ChakraProvider theme={defaultTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
