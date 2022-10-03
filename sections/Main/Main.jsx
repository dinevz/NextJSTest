import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledVideoImageContainer,
  StyledCardsImageWrapper,
  StyledCardContainer,
  StyledCardsContainer,
} from "./elements";


export const Main = ({ image, title, description, cards, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledCardsImageWrapper>
        <StyledVideoImageContainer>
          <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </StyledVideoImageContainer>
        <StyledCardsContainer>
          {cards.map((card, i) => <StyledCardContainer key={i} card={card} width={card.width} />)}
        </StyledCardsContainer>
      </StyledCardsImageWrapper>
    </StyledContainer>
  );
};
