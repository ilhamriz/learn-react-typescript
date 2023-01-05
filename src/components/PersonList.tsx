type Props = {
  names: {
    first: string,
    last: string
  }[]
}

export default function PersonList(props: Props) {
  return (
    <div>
      {props.names.map(name => (
        <h2>{name.first} {name.last}</h2>
      ))}
    </div>
  )
}
