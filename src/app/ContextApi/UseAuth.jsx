"use client";

import { useContext } from "react";
import { AuthContext } from "./ContextProvider";



export default function UseAuth() {
  return useContext(AuthContext);
}