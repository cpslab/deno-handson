import React from "https://esm.sh/react@18.2.0?pin=v99";
import { hydrateRoot } from "https://esm.sh/react-dom@18.2.0/client?pin=v99";
import { App } from "./App.tsx";

const rootElement = document.getElementById("root");
if (rootElement === null) {
  throw new Error("root の id がつけられた HTMLElement を見つけられなかった");
}

const initDateValue = rootElement.dataset["initDateValue"];
if (initDateValue === undefined) {
  throw new Error(
    "root の id がつけられた HTMLElement に data-init-date-value を設定していなかった",
  );
}

const initDateValueAsNumber = Number.parseInt(initDateValue, 10);
hydrateRoot(
  rootElement,
  <React.StrictMode>
    <App initDate={new Date(initDateValueAsNumber)} />
  </React.StrictMode>,
);
