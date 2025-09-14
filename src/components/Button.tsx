
type Props = {
    square: string | null
    onSquareClick: () => void
}

const Button = ({ square, onSquareClick }: Props) => {

  return (
    <button className="square" onClick={onSquareClick}>{square}</button>
  )
}

export default Button