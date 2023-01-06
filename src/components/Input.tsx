type Props = {
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: Props) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  }

  return (
    // <input type="text" value={props.value} onChange={props.handleChange} />
    <input type="text" value={props.value} onChange={handleInputChange} />
  )
}
