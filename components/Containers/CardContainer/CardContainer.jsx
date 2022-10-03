import Image from "next/image";
import { StyledCard, StyledCardDescription, StyledCardImageContainer, StyledCardTextContainer, StyledCardTitle } from "./elements"

export const CardContainer = ({ card, width=0}) => {
  return (
  <StyledCard width={width}>
    <StyledCardImageContainer>
      <Image 
        layout="responsive" 
        src={card.img.src} 
        alt={card.img.alt} 
        width={card.img.width} 
        height={card.img.height} />
    </StyledCardImageContainer>
    <StyledCardTextContainer>
      <StyledCardTitle>{card.title}</StyledCardTitle>
      <StyledCardDescription>{card.description}</StyledCardDescription>
    </StyledCardTextContainer>
  </StyledCard>
  )
}