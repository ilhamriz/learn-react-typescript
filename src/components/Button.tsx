import { CSSProperties } from "react";

type Props = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  styles: CSSProperties;
};

export default function Button(props: Props) {
  return (
    <button
      onClick={(event) => props.handleClick(event, 1)}
      style={props.styles}
    >
      Button
    </button>
  );
}
