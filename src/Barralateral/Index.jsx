import styled from "styled-components";

export const Navegation = styled.nav`
    width: ${props => props.ancho + "px"};
    height: 100vh;
    background-color: #fff;
    flex-direction: column;
    display: flex;
    font-size: 16px;
    align-items:  ${props => props.align ||"center"};
    position: relative;
    transition: width 250ms cubic-bezier(0, 1.83, 0.99, 0.76);
`;

export const Contedor = styled.div`
    width: 202px;
    height: 100%;
    background: #fff;
    position: ${props => props.position};
    margin-left: ${props => props.left + "px"};
    transition: margin-left 300ms cubic-bezier(1, -0.04, 0, 1.1);
`;

export const Icon = styled.i`
    font-size: ${props => props.sizeF + "px" || "10px"};
    color: ${props => props.colorF};
`;

export const Link = styled.a`
    background-color: 
        background-color: ${props => props.Background || "#fff"};
    width: ${props => props.ancho + "px" || "69%"};
    height: 49px;
    display: flex;
    flex-direction: ${props => props.direc || "column"};
    align-items: center;
    margin-top: 20px;
    margin-left: ${props => props.left + "px"};
    transition: background 300ms ease-in;
    border-radius: 50%;
    &:hover {
        background-color: ${props => props.BackHover || "#d4d4d4"};
        color: ${props => props.ColorHover };
    }
`;
export const H2 = styled.h2`
    font-size: ${props => props.sizeF + "px" || "10px"};
    color: ${props => props.colorF};
    margin-left: ${props => props.left + "px"};
`;
