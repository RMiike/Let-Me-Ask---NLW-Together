import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";

import Home from "../pages/Home";
import NewRoom from "../pages/NewRoom";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Routes;