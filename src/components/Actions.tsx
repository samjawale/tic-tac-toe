import { styled } from "styled-components";
import { Button, Space } from "antd";
import useActions from "../hooks/useActions";

const StyledBtn = styled(Button).attrs(() => {
  return { type: "primary" };
})`
  width: 150px;
  border-radius: 10px;
`;

const Actions = () => {
  const { onReset } = useActions();

  return (
    <Space>
      <StyledBtn>Undo</StyledBtn>
      <StyledBtn onClick={onReset}>Reset</StyledBtn>
      <StyledBtn>Play Again</StyledBtn>
    </Space>
  );
};

export default Actions;
