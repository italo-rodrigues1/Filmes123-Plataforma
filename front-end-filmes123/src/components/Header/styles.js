import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 100px;
    /* background-color: #FFF; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const CircleHeader = styled.div`
    position: absolute;
    top:-300px;
    border: 40px solid  #4EE057;
    z-index: 1;
    max-width: 500px;
    width: 100%;
    height: 500px;
    border-radius:100%;
`;

export const TitleLogo = styled.h1`
    color: #FFF;
    font-family: 'Jura', sans-serif;
    font-size: 400;
`;