import React, { ComponentType } from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type Props = {
  isLoggedIn: boolean;
  component: ComponentType<ProfileProps>;
};

export default function Private({ isLoggedIn, component: Component }: Props) {
  return <>{isLoggedIn ? <Component name="Ilham" /> : <Login />}</>;
}
