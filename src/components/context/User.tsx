import { useContext } from "react";
import { AuthUser, UserContext } from "./UserContext";

export default function User() {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: "Denji",
      email: "ilham@gmail.com",
    });
  };
  const handleLogout = () => {
    // userContext.setUser(null);
    userContext.setUser({} as AuthUser)
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User name is {userContext.user?.name}</p>
      <p>User email is {userContext.user?.email}</p>
    </>
  );
}
