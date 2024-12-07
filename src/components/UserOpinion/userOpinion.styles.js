import styled from "styled-components";

const StyledMainBox = styled.div`
    background-color: #512051;
    padding: 40px 32px 35px 32px;
    color: white;
    font-size: 17px;
    font-weight: 500;
    border-radius: 8px;

    @media screen and (width>1440px) {
		width: 350px;
	}
`;

const StyledProfileBox = styled.div`
    display:flex;
    margin-bottom: 31px;
`;

const StyledImg = styled.img`
    width:40px;
    height:40px;
    border-radius: 50%;
`;

const StyledInfoProfile = styled.div`
    line-height: auto;
    height:40px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 23px;
`;
const StyledName = styled.div`

`;
const StyledOccupation = styled.div`
    color: #EE69A4;
    font-weight: 400;
`;

const StyledOpinionBox = styled.div`
    width: 100%;
    height: 766px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (width>768px) {
		flex-direction:row;
        height: 266px;
	}
`;

export {StyledProfileBox, StyledImg, StyledInfoProfile, StyledMainBox, StyledOccupation, StyledName, StyledOpinionBox};