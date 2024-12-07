import styled from "styled-components";

const StyledBox = styled.div`
    padding: 24px;

    @media screen and (width>1440px) {
		padding: 118px 165px 100px 165px;
	}

`;
const StyledInfoBox = styled.div`
    @media screen and (width>1440px) {
		display: flex;
	}
`;
export {StyledBox,StyledInfoBox};