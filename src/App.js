import React from "react";

import { AuthProvider } from "./auth-context";

import WarehouseApp from "./WarehouseApp";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <WarehouseApp />
    </AuthProvider>
  );
}

export default App;
