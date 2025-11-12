import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import { Provider } from "react-redux";
import Blog from "./Blog";
import { store } from "./store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
    <Blog />
  </BrowserRouter>
  </Provider>
   )
  
