import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface GameState {
  squares: Array<string | null>;
  xIsNext: boolean;
}

const initialState: GameState = {
  squares: Array(9).fill(null),
  xIsNext: true,

}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    makeMove: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      // No permitir jugadas en casillas ocupadas
      if (state.squares[index] !== null) {
        return;
      }

      // Hacer el movimiento
      state.squares[index] = state.xIsNext ? 'X' : 'O';
      // Cambiar el turno
      state.xIsNext = !state.xIsNext;
    },

    resetGame: (state) => {
      state.squares = Array(9).fill(null);
      state.xIsNext = true;
    },
  },
});

export const { makeMove, resetGame } = gameSlice.actions;
export default gameSlice.reducer;