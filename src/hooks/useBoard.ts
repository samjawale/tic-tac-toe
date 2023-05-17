import { useDispatch, useSelector } from "react-redux";
import { Board, Location } from "../types/general";
import {
  boardSelector,
  currentPlayerSelector,
  mainSlice,
  pauseSelector,
  winningCellsSelector
} from "../store/mainSlice";
import { useEffect } from "react";

const { setMove, setWinner } = mainSlice.actions;

const LOCATIONS: Array<Location> = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2]
];

const POSSIBLE_WINNING_CELLS: Array<Array<Location>> = [
  [
    [0, 0],
    [0, 1],
    [0, 2]
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0]
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2]
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2]
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0]
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2]
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2]
  ]
];

const checkWinner = (board: Board, cells: Array<Location>): boolean => {
  const firstCell = board[cells[0][0]][cells[0][1]];
  const secondCell = board[cells[1][0]][cells[1][1]];
  const thirdCell = board[cells[2][0]][cells[2][1]];

  if (firstCell && firstCell === secondCell && firstCell === thirdCell)
    return true;

  return false;
};

const useBoard = () => {
  const dispatch = useDispatch();
  const pause = useSelector(pauseSelector);
  const player = useSelector(currentPlayerSelector);
  const board = useSelector(boardSelector);
  const winningCells = useSelector(winningCellsSelector);

  useEffect(() => {
    for (let i = 0; i < 8; i++) {
      const cells = POSSIBLE_WINNING_CELLS[i];
      const player = board[cells[0][0]][cells[0][1]];
      if (player && checkWinner(board, cells)) {
        dispatch(setWinner({ player, winningCells: cells }));
        return;
      }
    }
  }, [board, dispatch]);

  const onCellClick = (i: number) =>
    dispatch(setMove({ player, location: LOCATIONS[i] }));

  return { pause, player, board, winningCells, onCellClick };
};

export default useBoard;
