import styled from "styled-components";
import { SectionContainer, SectionHeading, SectionSubheading } from "~/components";
import { Card } from "../../collections/Card/Card";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  flex-direction: column;
`;


export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  color: black;
  font-size: 2.45rem;
  height: 4rem;
`;


export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 0 0 1.5rem 0;
  font-weight: 400;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
  text-align: center;
`;

export const StyledCardsContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

`;
export const StyledBriefCard = styled((props) => <Card {...props} />)`
  
`;
export const StyledSearchCard = styled((props) => <Card {...props} />)`
  width: 425px;
`;
export const StyledPitchCard = styled((props) => <Card {...props} />)`
  width: 450px;
  border: 2px solid #006EFD;
  
`;
export const StyledCardsImageWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  width: 80%;
  background-image: url('/img/background.png');
  background-size: contain;
  background-repeat: no-repeat;
  justify-content: center;

`;

export const StyledVideoImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 18rem;
  max-height: 30rem;
  margin-right: 4rem;
  width: 100%;
  height: 100%;
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
`
export const StyledPitchTitle = styled((props) => <StyledCardTitle {...props} />)`
  color: #006EFD;
  text-decoration: underline;
`

export const StyledCardDescription = styled((props) => <SectionSubheading {...props} />)`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3rem;
  margin: 0;
  font-family: sans-serif;
`;