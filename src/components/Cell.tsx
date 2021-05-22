import { Button } from "antd";
import styled from "styled-components";

const StyledBtn = styled(Button)`
  height: 150px;
  width: 150px;
  font-size: 3em;
  border-radius: 10px;
`;

type Props = {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
};
const Cell = ({ ...rest }: Props) => {
  return <StyledBtn {...rest} />;
};

export default Cell;
