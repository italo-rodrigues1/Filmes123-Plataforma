import styled  from "styled-components";

export const FormContainer = styled.div`
    width: 100%;
    height: 88vh;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;
`;

export const BoxScreen = styled.div`
    max-width:400px;
    width: 100%;
    height: 450px;
    /* background-color: #FFF; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Label = styled.label`
    /* background-color: green; */
    margin-bottom:20px;
    height:50px;
    text-align: center;
    position: relative;
    width: 300px;
`;

export const Input = styled.input`
   padding:10px;
   border:none;
   border-radius:10px;
   background: #212121;
   width: 100%;
   height: 50px;
   outline: none;
   color: #FFF;
`;

export const SpanLabel = styled.span`
    position: absolute;
    top: -8px;
    left:10px;
    color: #A3A3A3;
    font-family: 'Jura', sans-serif;
    font-size: 20px;
`;
export const Span = styled.span`
    color: #A3A3A3;
    font-family: 'Jura',sans-serif;
    font-size: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    >p{
        font-size: 15px;
        color: #1ED569;
        cursor: pointer;
    }
`;
export const BtnEntrar = styled.button`
   color:#FFF;
   margin-top:10px;
   padding:10px;
   width: 200px;
   height: 40px;
   border:none;
   border-radius:10px;
   background: #212121;
   cursor: pointer;
   &:hover{
        opacity:0.5;
   }
`;