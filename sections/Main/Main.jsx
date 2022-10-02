import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledVideoImageContainer,
  StyledCardsImageWrapper,
  StyledCardsContainer,
  StyledBriefCard,
  StyledSearchCard,
  StyledPitchCard,
  StyledCardImageContainer,
  StyledCardTextContainer,
  StyledCardTitle,
  StyledCardDescription,
  StyledPitchTitle,
} from "./elements";

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
          <StyledBriefCard>
            <StyledCardImageContainer>
              <Image layout="responsive" src={briefCard.img.src} alt={briefCard.img.alt} width={briefCard.img.width} height={briefCard.img.height} />
            </StyledCardImageContainer>
            <StyledCardTextContainer>
              <StyledCardTitle>{briefCard.title}</StyledCardTitle>
              <StyledCardDescription>{briefCard.description}</StyledCardDescription>
            </StyledCardTextContainer>
          </StyledBriefCard>
          <StyledSearchCard>
            <StyledCardImageContainer>
              <Image layout="responsive" src={searchCard.img.src} alt={searchCard.img.alt} width={searchCard.img.width} height={searchCard.img.height} />
            </StyledCardImageContainer>
            <StyledCardTextContainer>
              <StyledCardTitle>{searchCard.title}</StyledCardTitle>
              <StyledCardDescription>{searchCard.description}</StyledCardDescription>
            </StyledCardTextContainer>
          </StyledSearchCard>
          <StyledPitchCard>
            <StyledCardImageContainer>
              <Image layout="responsive" src={pitchCard.img.src} alt={pitchCard.img.alt} width={pitchCard.img.width} height={pitchCard.img.height} />
            </StyledCardImageContainer>
            <StyledCardTextContainer>
              <StyledCardTitle><StyledPitchTitle>{pitchCard.title}</StyledPitchTitle></StyledCardTitle>
              <StyledCardDescription>{pitchCard.description}</StyledCardDescription>
            </StyledCardTextContainer>
          </StyledPitchCard>
        </StyledCardsContainer>
      </StyledCardsImageWrapper>
    </StyledContainer>
  );
};
