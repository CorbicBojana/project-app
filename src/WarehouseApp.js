import React from "react";

import { useAuthContext } from "./auth-context";

import AuthApp from "./AuthApp/AuthApp";
import UnauthApp from "./UnauthApp/UnauthApp";

function WarehouseApp() {
  const { userSingIn } = useAuthContext();

  return <div className="app">{userSingIn ? <AuthApp /> : <UnauthApp />}</div>;
}

export default WarehouseApp;
