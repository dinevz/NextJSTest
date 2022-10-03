import styled from "styled-components";
import { SectionContainer, SectionHeading, SectionSubheading, CardContainer } from "~/components";

export const StyledContainer = styled(({...props }) => <SectionContainer {...props} />)`
  align-items: center;
  flex-direction: column;
`;

export const StyledCardContainer = styled(({...props}) => <CardContainer {...props} />)`

`
export const StyledCardsImageWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  width: 80%;
  background-image: url('/img/background.png');
  background-size: contain;
  background-repeat: no-repeat;
  justify-content: center;
  padding: 3rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const StyledVideoImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 18rem;
  max-height: 30rem;
  margin-right: 4rem;
  width: 100%;
  height: 100%;
  @media (max-width: 1024px) {
    margin-bottom: 2rem;
  }
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
  @media (max-width: 1024px) {
    margin-bottom: 2rem;
  };
`;

export const StyledCardsContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

`;
