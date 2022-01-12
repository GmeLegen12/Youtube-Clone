import styled from "styled-components";

export const HeaderNav = styled.header`
    width: 100%;
    height: 56px;
    background: #fff;
    display: flex;
    /* align-items: center; */
    /* justify-content: space-between; */
    overflow: hidden;
`;
export const Image = styled.img`
    width: ${props => props.size || "50px"};
    cursor: ${props => props.c || "default"};
    margin-left: ${props => props.left || "0px"};
    margin-right: ${props => props.right || "0px"};
    border-radius: ${props => props.elipce || "0px"};

    @media screen and (max-width: 292px){
        display: ${props => props.dp};
    }


`;
export const Icon = styled.i`
    margin-left: ${props => props.left || "0px" };
    margin-right: ${props => props.right || "0px"};
    font-size: ${props => props.size || "0px"};
    color: ${props => props.color || "#000"};
    cursor: pointer;
`;

export const Textbox = styled.input`
    width: ${props => props.sizeW || "100px"};
    height: ${props => props.sizeH || "50px"};
    padding: 3px;
    padding-right: ${props => props.right || "3px"};
    padding-left: ${props => props.left || "3px"};
    font-size: 1.1em;
    
    @media screen and (max-width: 579px){
        width: ${props => props.sizeW2 || "250px"};
    }
    
    @media screen and (max-width: 409px){
        display: ${props => props.display3};
    }
`;

export const Button = styled.button`
    background:  ${props => props.background || "#f4f4f4"};
    cursor: pointer;
    padding: ${props => props.padding || "0px"};
    margin-left: ${props => props.left || "0px"};
    margin-right: ${props => props.right || "0px"};
    border: ${props => props.border || "none"};
    display: ${props => props.display};
    @media screen and (max-width: 409px){
        display: ${props => props.display2};
        margin-left: ${props => props.left2 || "0px"};
        margin-right: ${props => props.right2 || "0px"};
        background:  ${props => props.background2};
        padding: ${props => props.padding2 };

    }
`;

export const Contenedor = styled.div`
    align-items: center;
    transition: ${props => props.trans};
    margin-left: ${props => props.left};
    margin-top: ${props => props.top};
    display: ${props => props.df};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    z-index: ${props => props.z};
    transition: ${props => props.t};
    width: ${props => props.sizeW};
    height: ${props => props.sizeH};
    @media screen and (max-width: 409px){
        width: ${props => props.sizeW2 || "100%"};
        height: ${props => props.sizeH2 || "100%"};
        background: ${props => props.background};
        margin-left: ${props => props.left2};
        display: ${props => props.display2 || "flex"};
    }

    
    
`;

export const Link = styled.a`
    margin-right: ${props => props.right || "0px"};
    margin-left: ${props => props.left || "0px"};
    text-decoration: none;
`;
