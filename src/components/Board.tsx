import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Cell from "./Cell";

type State = {
  currentPlayer: string;
  cells: string[];
};

const initialCellVal = "";
const initialState: State = {
  currentPlayer: "X",
  cells: [
    initialCellVal,
    initialCellVal,
    initialCellVal,
    initialCellVal,
    initialCellVal,
    initialCellVal,
    initialCellVal,
    initialCellVal,
    initialCellVal,
  ],
};
const Board = () => {
  const [state, setState] = useState<State>(initialState);

  const { cells } = state;

  useEffect(() => {
    if (
      !!cells[0] &&
      ((cells[0] === cells[1] && cells[0] === cells[2]) ||
        (cells[0] === cells[3] && cells[0] === cells[6]) ||
        (cells[0] === cells[4] && cells[0] === cells[8]))
    ) {
      alert("Winner is : " + cells[0]);
      return setState(initialState);
    }

    if (
      !!cells[1] &&
      ((cells[1] === cells[0] && cells[1] === cells[2]) ||
        (cells[1] === cells[4] && cells[1] === cells[7]))
    ) {
      alert("Winner is : " + cells[1]);
      return setState(initialState);
    }

    if (
      !!cells[2] &&
      ((cells[2] === cells[0] && cells[2] === cells[1]) ||
        (cells[2] === cells[5] && cells[2] === cells[8]) ||
        (cells[2] === cells[4] && cells[2] === cells[6]))
    ) {
      alert("Winner is : " + cells[2]);
      return setState(initialState);
    }

    if (
      !!cells[3] &&
      ((cells[3] === cells[0] && cells[3] === cells[6]) ||
        (cells[3] === cells[4] && cells[3] === cells[5]))
    ) {
      alert("Winner is : " + cells[3]);
      return setState(initialState);
    }

    if (
      !!cells[4] &&
      ((cells[4] === cells[1] && cells[4] === cells[7]) ||
        (cells[4] === cells[3] && cells[4] === cells[5]))
    ) {
      alert("Winner is : " + cells[4]);
      return setState(initialState);
    }

    if (
      !!cells[5] &&
      ((cells[5] === cells[2] && cells[5] === cells[8]) ||
        (cells[5] === cells[3] && cells[5] === cells[4]))
    ) {
      alert("Winner is : " + cells[5]);
      return setState(initialState);
    }

    if (
      !!cells[6] &&
      ((cells[6] === cells[0] && cells[6] === cells[3]) ||
        (cells[6] === cells[2] && cells[6] === cells[4]) ||
        (cells[6] === cells[7] && cells[6] === cells[8]))
    ) {
      alert("Winner is : " + cells[6]);
      return setState(initialState);
    }

    if (
      !!cells[7] &&
      ((cells[7] === cells[1] && cells[7] === cells[4]) ||
        (cells[7] === cells[6] && cells[7] === cells[8]))
    ) {
      alert("Winner is : " + cells[7]);
      return setState(initialState);
    }

    if (
      !!cells[8] &&
      ((cells[8] === cells[0] && cells[8] === cells[4]) ||
        (cells[8] === cells[2] && cells[8] === cells[5]) ||
        (cells[8] === cells[6] && cells[8] === cells[7]))
    ) {
      alert("Winner is : " + cells[8]);
      return setState(initialState);
    }
  }, [cells]);

  return (
    <Row gutter={[16, 16]}>
      {state.cells.map((c, i) => (
        <Col span={8}>
          <Cell
            disabled={!!c}
            onClick={() => {
              setState((p) => {
                const prevCells = [...p.cells];
                prevCells[i] = p.currentPlayer;

                return {
                  currentPlayer: p.currentPlayer === "X" ? "O" : "X",
                  cells: [...prevCells],
                };
              });
            }}
            children={c}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Board;
