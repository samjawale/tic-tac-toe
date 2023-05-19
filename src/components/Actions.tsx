import { styled } from "styled-components";
import { Button, Space } from "antd";
import {
  AppstoreOutlined,
  RollbackOutlined,
  UndoOutlined
} from "@ant-design/icons";
import useActions from "../hooks/useActions";

const StyledBtn = styled(Button).attrs(() => {
  return { type: "primary" };
})`
  width: 150px;
  border-radius: 10px;
`;

const Actions = () => {
  const { onUndo, onReset, onNewGame } = useActions();

  return (
    <Space>
      <StyledBtn onClick={onUndo}>
        <RollbackOutlined />
        Undo
      </StyledBtn>

      <StyledBtn onClick={onReset}>
        <UndoOutlined /> Reset
      </StyledBtn>

      <StyledBtn onClick={onNewGame}>
        <AppstoreOutlined />
        New Game
      </StyledBtn>
    </Space>
  );
};

export default Actions;
