"use client";

import { createContext, useContext } from "react";

/** true once the preloader curtain starts lifting — hero animations key off this. */
export const ReadyContext = createContext(false);

export function useReady() {
  return useContext(ReadyContext);
}
