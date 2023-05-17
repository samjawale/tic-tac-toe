import { Board, Location, Move, Player } from "./general";

export type MainSlice = {
  pause: boolean;
  currentPlayer: Player;
  board: Board;
  moves: Array<Move>;
  playerXWins: number;
  playerOWins: number;
  winningCells: Array<Location>;
};

export type Store = {
  main: MainSlice;
};
