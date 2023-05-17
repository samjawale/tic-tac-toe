import { Provider as ReduxProvider } from "react-redux";
import { styled } from "styled-components";
import { Space, Typography } from "antd";
import "antd/dist/reset.css";
import "./index.css";
import Board from "./components/Board";
import { store } from "./store/store";
import Actions from "./components/Actions";

const { Title } = Typography;

const StyledContainer = styled(Space)`
  width: 100%;
  align-items: center;
`;

const App = () => {
  return (
    <ReduxProvider store={store}>
      <StyledContainer direction="vertical">
        <Title>Tic-Tac-Toe</Title>
        <Actions />
        <Board />
      </StyledContainer>
    </ReduxProvider>
  );
};

export default App;
