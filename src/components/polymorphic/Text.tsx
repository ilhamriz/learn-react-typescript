import { ComponentProps, ElementType, ReactNode } from "react";

type OwnProps<E extends ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: ReactNode;
  as?: E
};

type Props<E extends ElementType> = OwnProps<E> & Omit<ComponentProps<E>, keyof OwnProps<E>>

const Text = <E extends ElementType>({ size, color, children, as }: Props<E>) => {
  const Component = as || "div";
  return <Component className={`text-${size}-${color}`}>{children}</Component>;
};

export default Text;
