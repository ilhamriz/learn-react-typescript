import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  // lesson-4
  // const [user, setUser] = useState<AuthUser | null>(null);

  // lesson-4.2
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Ilham",
      email: "ilham@example.com",
    });
  };
  const handleLogout = () => {
    // lesson-4
    // setUser(null);

    // lesson-4.2
    setUser({} as AuthUser);
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </>
  );
}
