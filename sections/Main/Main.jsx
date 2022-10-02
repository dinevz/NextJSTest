import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledVideoImageContainer,
  StyledCardsImageWrapper,
  StyledCardsContainer,
  StyledCard,
  StyledCardImageContainer,
  StyledCardTextContainer,
  StyledCardTitle,
  StyledCardDescription,
} from "./elements";

const StyledCardContainer = ({ card, width=0, active="false" }) => {
  return (
  <StyledCard width={width} active={active}>
    <StyledCardImageContainer>
      <Image 
        layout="responsive" 
        src={card.img.src} 
        alt={card.img.alt} 
        width={card.img.width} 
        height={card.img.height} />
    </StyledCardImageContainer>
    <StyledCardTextContainer>
      <StyledCardTitle active={active}>{card.title}</StyledCardTitle>
      <StyledCardDescription>{card.description}</StyledCardDescription>
    </StyledCardTextContainer>
  </StyledCard>
  )
}

export const Main = ({ image, title, description, briefCard, searchCard, pitchCard, ...props }) => {
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
          <StyledCardContainer card={briefCard} width={briefCard.width} />
          <StyledCardContainer card={searchCard} width={searchCard.width} />
          <StyledCardContainer card={pitchCard} width={pitchCard.width} active="true"/>
        </StyledCardsContainer>
      </StyledCardsImageWrapper>
    </StyledContainer>
  );
};
