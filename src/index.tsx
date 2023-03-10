import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/reducer/cryptoCoinReducer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CryptoCoins from "./Components/CryptoCoins";
import CryptoCards from "./Components/CryptoCards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CryptoCoins />,
  },
  {
    path: "/coin/:uuid",
    element: <CryptoCards />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
