export type Player = "X" | "O";

export type Board = Array<Array<Player | "">>;

export type Location =
  | [0, 0]
  | [0, 1]
  | [0, 2]
  | [1, 0]
  | [1, 1]
  | [1, 2]
  | [2, 0]
  | [2, 1]
  | [2, 2];

export type Move = {
  player: Player;
  location: Location;
};
