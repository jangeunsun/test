import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Counter from "./Counter";
import Hello from "./Hello";


const Routes = () => {
  return (
    <BrowserRouter>
    <Route exact={true} path='/' component={Hello} />
    <Route path='Counter' component={Counter} />
    </BrowserRouter>
  );
};
export default App;