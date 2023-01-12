import React from 'react'

type Number = {
  value: number
};

type Positive = Number & {
  isPositive: boolean,
  isNegative?: never,
  isZero?: never,
}

type Negative = Number & {
  isNegative: boolean,
  isPositive?: never,
  isZero?: never,
}

type Zero = Number & {
  isZero: boolean,
  isPositive?: never,
  isNegative?: never,
}

type Props = Positive | Negative | Zero;

// type Props = {
//   value: number,
//   isPositive?: boolean,
//   isNegative?: boolean,
//   isZero?: boolean,
// }

const RandomNumber = ({value, isPositive, isNegative, isZero}: Props) => {
  return (
    <div>
      {value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}
    </div>
  )
}

export default RandomNumber