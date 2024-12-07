import { StyledImg, StyledInfoProfile, StyledMainBox, StyledName, StyledOccupation, StyledProfileBox } from "./userOpinion.styles";

const UserOpinion = ({name,text,img}) =>{
    return(
        <StyledMainBox>
            <StyledProfileBox>
                <StyledImg src={img} alt="" />
                <StyledInfoProfile>
                    <StyledName>{name}</StyledName>
                    <StyledOccupation>Verified Buyer</StyledOccupation>
                </StyledInfoProfile>
            </StyledProfileBox>
            <p>{text}</p>
        </StyledMainBox>
    )
}

export default UserOpinion;