import { atom } from "jotai";

// Load theme from localStorage  
const storedTheme = typeof window !== "undefined" ? localStorage.getItem('theme') : null;  

export const themeAtom = atom(storedTheme || "dark");  
