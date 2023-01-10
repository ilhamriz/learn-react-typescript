import { createContext, ReactNode, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser,
  setUser: React.Dispatch<React.SetStateAction<AuthUser>>
}

type Props = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState({} as AuthUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
