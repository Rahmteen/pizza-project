import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource-variable/bricolage-grotesque";

import { defaultTheme } from "@/theme";
import App from "@/App";

/**
 * @name root
 * @description handles static imports, global providers and init state mgmt (todo). 
 */

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <ChakraProvider theme={defaultTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
