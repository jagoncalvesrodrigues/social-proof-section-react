import styled from "styled-components";

const StyledMainDiv = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #F7F2F7;
    border-radius: 8px;
    padding-top: 16px;
    color: #512051;
    font-size: 17px;
    font-weight: 700;
    line-height:auto;
    height:78px;
`;
const StarsDiv = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;

const StyledBoxRates = styled.div`
    width: 100%;
    height: 266px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 49px;
`;

export {StyledMainDiv, StarsDiv, StyledBoxRates};