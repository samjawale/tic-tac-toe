import { styled } from "styled-components";
import { Card, Col, Row, Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined, LineOutlined } from "@ant-design/icons";
import useStats from "../hooks/useStats";

const WIN_COLOR = "#3f8600";
const LOOSE_COLOR = "#cf1322";
const DRAW_COLOR = "#555555";

const getColor = (a: number, b: number): typeof WIN_COLOR | typeof LOOSE_COLOR | typeof DRAW_COLOR => {
  if (a > b) return WIN_COLOR;
  if (a < b) return LOOSE_COLOR;
  return DRAW_COLOR;
};

const getIcon = (a: number, b: number) => {
  if (a > b) return <ArrowUpOutlined />;
  if (a < b) return <ArrowDownOutlined />;
  return <LineOutlined />;
};

const StyledCard = styled(Card)`
  min-width: 100px;
  .ant-card-body {
    padding: 12px;
  }
`;

const Stats = () => {
  const { xWins, oWins } = useStats();

  return (
    <Row gutter={16}>
      <Col span={12}>
        <StyledCard>
          <Statistic
            title="X Wins"
            value={xWins}
            valueStyle={{ color: getColor(xWins, oWins) }}
            prefix={getIcon(xWins, oWins)}
          />
        </StyledCard>
      </Col>

      <Col span={12}>
        <StyledCard>
          <Statistic
            title="O Wins"
            value={oWins}
            valueStyle={{ color: getColor(oWins, xWins) }}
            prefix={getIcon(oWins, xWins)}
          />
        </StyledCard>
      </Col>
    </Row>
  );
};

export default Stats;
