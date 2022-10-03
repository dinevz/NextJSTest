import Image from "next/image";
import { StyledCard, StyledCardDescription, StyledCardImageContainer, StyledCardTextContainer, StyledCardTitle } from "./elements"

export const CardContainer = ({ img, title, description, width=0, ...props}) => {
  return (
  <StyledCard width={width}>
    <StyledCardImageContainer>
      <Image 
        layout="responsive" 
        src={img.src} 
        alt={img.alt} 
        width={img.width} 
        height={img.height} />
    </StyledCardImageContainer>
    <StyledCardTextContainer>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardDescription>{description}</StyledCardDescription>
    </StyledCardTextContainer>
  </StyledCard>
  )
}