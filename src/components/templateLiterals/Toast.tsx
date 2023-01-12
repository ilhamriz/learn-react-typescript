type Horizontal = 'left' | 'center' | 'right'
type Vertical = 'top' | 'center' | 'bottom'

type Props = {
  position: Exclude<`${Horizontal}-${Vertical}`, 'center-center'> | 'center';
}

const Toast = ({position}: Props) => {
  return (
    <div>Toast Notification Position - {position}</div>
  )
}

export default Toast