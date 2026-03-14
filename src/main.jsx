import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
// import { Provider } from "@/components/ui/provider";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./states";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>,
);
