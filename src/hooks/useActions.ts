import { useDispatch } from "react-redux";
import { mainSlice } from "../store/mainSlice";

const { reset } = mainSlice.actions;

const useActions = () => {
  const dispatch = useDispatch();

  const onReset = () => dispatch(reset());

  return { onReset };
};

export default useActions;
