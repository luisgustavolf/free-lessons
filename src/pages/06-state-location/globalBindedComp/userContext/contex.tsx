import React from "react";
import { IUserContextValues } from "./iUserContextValues";

export const UserContext = React.createContext<IUserContextValues>({
  update: () => {}
})