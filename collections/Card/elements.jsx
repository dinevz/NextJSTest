// Styled elements for the Card go here
import styled from "styled-components";

export const StyledCard = styled(({...props }) => <div {...props} />)`
  display: flex;
  width: 400px;
  height: 130px;
  background-color: #F1F1F1;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: space-evenly;
`;
