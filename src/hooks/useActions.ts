import { useDispatch } from "react-redux";
import { mainSlice } from "../store/mainSlice";

const { reset, newGame, undo } = mainSlice.actions;

const useActions = () => {
  const dispatch = useDispatch();

  const onUndo = () => dispatch(undo());
  const onReset = () => dispatch(reset());
  const onNewGame = () => dispatch(newGame());

  return { onUndo, onReset, onNewGame };
};

export default useActions;
