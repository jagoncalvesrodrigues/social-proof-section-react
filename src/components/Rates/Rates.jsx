import { StarsDiv, StyledMainDiv } from "./rates.styles";


const Rates = ({text,img}) =>{
    return (
    <StyledMainDiv>
        <StarsDiv>
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
        </StarsDiv>
        <p>{text}</p>
    </StyledMainDiv>
    )
}


export default Rates;