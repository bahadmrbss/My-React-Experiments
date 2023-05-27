import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'semantic-ui-css/semantic.min.css'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const allExtensions = composeWithDevTools(applyMiddleware(thunk));

const myStore = createStore(rootReducer, allExtensions);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={myStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();