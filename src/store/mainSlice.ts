import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notification } from "antd";
import { MainSlice, Store } from "../types/store";
import { Location, Move, Player } from "../types/general";

const initialState: MainSlice = {
  pause: false,
  currentPlayer: "X",
  board: Array(3).fill(Array(3).fill("")),
  moves: [],
  playerOWins: 0,
  playerXWins: 0,
  winningCells: []
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    reset(s) {
      return {
        ...initialState,
        playerOWins: s.playerOWins,
        playerXWins: s.playerXWins
      };
    },
    newGame() {
      return initialState;
    },
    undo(s, _: PayloadAction) {
      const lastMove = s.moves.pop();
      if (!lastMove) return;

      const { player, location } = lastMove;
      s.currentPlayer = player;
      s.board[location[0]][location[1]] = "";
    },
    setMove(s, a: PayloadAction<Move>) {
      const { player, location } = a.payload;
      s.moves.push(a.payload);
      s.currentPlayer = player === "X" ? "O" : "X";
      s.board[location[0]][location[1]] = player;
    },
    setWinner(s, a: PayloadAction<{ player: Player; winningCells: Location[] }>) {
      s.pause = true;
      const { player: winner, winningCells } = a.payload;
      notification.success({
        message: "We have a Winner!",
        description: `${winner} has won! Congratulations!`
      });
      s.winningCells = winningCells;
      if (winner === "X") s.playerXWins += 1;
      else s.playerOWins += 1;
    }
  }
});

// selectors
const mainSliceSelector = (s: Store) => s.main;

export const pauseSelector = createSelector(mainSliceSelector, s => s.pause);
export const currentPlayerSelector = createSelector(mainSliceSelector, s => s.currentPlayer);
export const playerXWinsSelector = createSelector(mainSliceSelector, s => s.playerXWins);
export const playerOWinsSelector = createSelector(mainSliceSelector, s => s.playerOWins);
export const winningCellsSelector = createSelector(mainSliceSelector, s => s.winningCells);
export const boardSelector = createSelector(mainSliceSelector, s => s.board);
