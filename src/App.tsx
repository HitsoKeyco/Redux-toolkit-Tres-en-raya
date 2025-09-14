
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Button from './components/Button'
import { calculateWinner } from './utils/calculateWinner'
import confetti from 'canvas-confetti'
import type { RootState } from './store'
import { makeMove, resetGame } from './store/slices/gameSlice'

function App() {
  // Obtener estado desde Redux
  const squares = useSelector((state: RootState) => state.game.squares)
  const xIsNext = useSelector((state: RootState) => state.game.xIsNext)
  
  // Obtener dispatch para enviar acciones
  const dispatch = useDispatch()

  const handleSquareClick = (i: number) => {
    // Verificar si ya hay ganador o la casilla está ocupada
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    
    // Enviar acción a Redux
    dispatch(makeMove(i))
  }

  const winner = calculateWinner(squares)
  
  let status
  if (winner) {
    status = `Ganador: ${winner}`
    //lanzmamos confetti
    confetti({
      particleCount: 1000,
      angle: 0,      
      gravity: 0.5,      
      decay: 0.9,
      startVelocity: 30,      
      spread: 360,
      origin: { y: 0.5, x: 0.5 },
      zIndex: 1000,
      ticks: 200,      
    })

  } else {
    status = `Siguiente jugador: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <>
      <div className="board-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <div className="status" style={{ fontSize: '15px', fontWeight: 'bold', backgroundColor: '#253', color: 'white', padding: ' 10px 20px', borderRadius: '10px' }}>{status}</div>

        <div className="board-row" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <Button square={squares[0]} onSquareClick={() => handleSquareClick(0)}/>
          <Button square={squares[1]} onSquareClick={() => handleSquareClick(1)}/>
          <Button square={squares[2]} onSquareClick={() => handleSquareClick(2)}/>
        </div>
        <div className="board-row" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <Button square={squares[3]} onSquareClick={() => handleSquareClick(3)}/>
          <Button square={squares[4]} onSquareClick={() => handleSquareClick(4)}/>
          <Button square={squares[5]} onSquareClick={() => handleSquareClick(5)}/>
        </div>
        <div className="board-row" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <Button square={squares[6]} onSquareClick={() => handleSquareClick(6)}/>
          <Button square={squares[7]} onSquareClick={() => handleSquareClick(7)}/>
          <Button square={squares[8]} onSquareClick={() => handleSquareClick(8)}/>
        </div>
      </div>

      <button style={{ marginTop: '20px', width: '200px', height: '50px' }} onClick={() => dispatch(resetGame())}>Reset</button>
    </>
  )
}

export default App
