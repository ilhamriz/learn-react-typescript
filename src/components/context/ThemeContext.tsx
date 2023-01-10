import { createContext, ReactNode } from "react";
import { theme } from "./theme";

type Props = {
  children: ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({ children }: Props) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
