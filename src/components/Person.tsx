type Props = {
  name: {
    first: string,
    last: string
  }
};

export default function Person(props: Props) {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}
