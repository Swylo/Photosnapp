import React, { createContext, useState } from "react";

export const ActiveInviteContext = createContext();

export function ActiveInviteProvider({ children }) {
  const [isActive, setActive] = useState(false);
  function setOpenInvite() {
    setActive(true);
  }
  function setCloseInvite() {
    setActive(false);
  }
  return (
    <ActiveInviteContext.Provider
      value={{ isActive, setOpenInvite, setCloseInvite }}
    >
      {children}
    </ActiveInviteContext.Provider>
  );
}
