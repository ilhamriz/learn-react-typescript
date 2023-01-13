import React, { ComponentProps } from "react";

type Props = ComponentProps<"input">;

const Input = (props: Props) => {
  return <input type="text" {...props} />;
};

export default Input;
