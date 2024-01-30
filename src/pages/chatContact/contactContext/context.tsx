import React from "react";
import { ContactContextValues } from "./iContactContextValues";

export const ContactContext = React.createContext<ContactContextValues>({
  contactId: '',
  refresh: () => {}
})