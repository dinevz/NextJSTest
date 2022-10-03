import styled from "styled-components";
import { Card } from "../../../collections/Card/Card";
import { SectionHeading, SectionSubheading } from "~/components"

export const StyledCard = styled((props) => <Card {...props}/>)`
    width: ${({ width }) => width}px;
    border: 2px solid transparent;
    &:hover {
      cursor: pointer;
      border: 2px solid #006EFD;
    }
    @media (max-width: 1024px) {
      margin-bottom: 2rem;
    }
`;


export const StyledCardImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 4.5rem;
  max-height: 4rem;
  width: 100%;
  height: 100%;
`;

export const StyledCardTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  text-align: start;
  width: 60%;
`;

export const StyledCardTitle = styled((props) => <SectionHeading {...props} />)`
  font-size: 1.3rem;
  line-height: 1rem;
  height: auto;
  margin-bottom: 0.5rem;
  ${StyledCard}:hover & {
    color: #006EFD;
    text-decoration: underline;
  }
`

export const StyledCardDescription = styled((props) => <SectionSubheading {...props} />)`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3rem;
  margin: 0;
  font-family: sans-serif;
`;

