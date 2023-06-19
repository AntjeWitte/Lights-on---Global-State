import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onOn, onOff }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          onOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          onOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
