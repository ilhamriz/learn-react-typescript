import { ComponentProps } from "react";

type Props = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<ComponentProps<"button">, "children">;

const Button = ({ variant, children, ...rest }: Props) => {
  return (
    <button className={`btn-${variant}`} {...rest}>
      Button
    </button>
  );
};

export default Button;
