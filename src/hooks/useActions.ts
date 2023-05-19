import { useDispatch } from "react-redux";
import { mainSlice, pauseSelector } from "../store/mainSlice";
import { useSelector } from "react-redux";

const { reset, newGame, undo } = mainSlice.actions;

const useActions = () => {
  const dispatch = useDispatch();
  const pause = useSelector(pauseSelector);

  const onUndo = () => dispatch(undo());
  const onReset = () => dispatch(reset());
  const onNewGame = () => dispatch(newGame());

  return { pause, onUndo, onReset, onNewGame };
};

export default useActions;
