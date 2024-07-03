import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as RematchProvider } from "react-redux";

import "@fontsource-variable/bricolage-grotesque";

import { defaultTheme } from "@/theme";
import { store } from "@/store/store";
import App from "@/App";

/**
 * @name root
 * @description handles static imports, global providers and init store + state mgmt.
 */

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <RematchProvider store={store}>
      <ChakraProvider theme={defaultTheme}>
        <App />
      </ChakraProvider>
    </RematchProvider>
  </BrowserRouter>
);
