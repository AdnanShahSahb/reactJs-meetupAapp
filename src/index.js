import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import { FavoriteContextProvider } from "./components/store/favoriteContext";
import { FavouriteComp } from "./components/store/favoritingContexting";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <FavoriteContextProvider>
  <FavouriteComp>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouriteComp>
  // </FavoriteContextProvider>
);
