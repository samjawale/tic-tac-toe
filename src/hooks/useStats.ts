import { playerOWinsSelector, playerXWinsSelector } from "../store/mainSlice";
import { useSelector } from "react-redux";

const useStats = () => {
  const xWins = useSelector(playerXWinsSelector);
  const oWins = useSelector(playerOWinsSelector);

  return {
    xWins,
    oWins
  };
};

export default useStats;
