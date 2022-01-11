import { HeaderNav, Image, Icon, Textbox, Button, Contenedor, Link } from "./index";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faVideo, faTimes, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import logo from "../../assets/youtube-logo-2020.svg";
import user from '../../assets/user.svg';

export default function Cabezera (){
    const Bars = <FontAwesomeIcon icon={faBars}/>
    const Bell = <FontAwesomeIcon icon={faBell}/>
    const Search = <FontAwesomeIcon icon={faSearch}/>
    const Video = <FontAwesomeIcon icon={faVideo}/>
    const Close = <FontAwesomeIcon icon={faTimes}/>
    const arrowTop = <FontAwesomeIcon icon={faArrowUp}/>
    const txt__Search = useRef("")
    const txt__SearchMovil = useRef("")
    const [ mostar, ocultar ] = useState(true)
    const [ clear, setClear ] = useState(true)
    const [ mostrar, getMostrar ] = useState(true)
    const onSearch = () => {
        txt__Search.current.value = "";
        ocultar(true);
    }

    const onMostar = () => {
        if (txt__Search.current.value == ""){
            ocultar(true);
        } else {
            ocultar(false);
        }
        
        
    }
    const onMostrarMovil = () => {
        if (txt__SearchMovil.current.value == ""){
            
            setClear(true);
        } else {
            setClear(false);
        }
    }
    const onMostarbuscador = () => mostrar ? getMostrar(false) : getMostrar(true);
    

    return (
        <HeaderNav>
            <Contenedor  justify="center" align="center" 
            top={mostrar ?"-369px" : "0px"} 
            background="#fff" 
            display2="flex" 
            df="none" sizeW2="100%" 
            sizeH2="100%" z="2" 
            t="margin-top 300ms ease-in"
            >

                    <Button onClick={() => getMostrar(true)} 
                    background="none" right2="10px" display2="flex">
                        <Icon size="25px">{arrowTop}</Icon>
                    </Button>
                    
                    <Textbox ref={txt__SearchMovil} onChange={ onMostrarMovil } sizeH="37px" sizeW2="80%"/>

                    <Button hidden={clear} onClick={ () => txt__SearchMovil.current.value = "" } 
                        right="1px" left2="-34px" 
                        background="none" padding="9px">
                            <Icon  size="18px">{Close}</Icon>
                    </Button>

                    <Icon  size="24px" left="5px">{Search}</Icon>
            </Contenedor>

            <Contenedor display2="flex" left2="-292px" sizeW="100%" sizeH="100%" df="flex" justify="space-between">
                <Contenedor df="flex">
                    <Button left2="7px" left="20px" background="none" ><Icon size="22px" >{Bars}</Icon></Button>
                    <Image c="pointer" size="93px" left="21px" src={logo}/>
                </Contenedor>
                
                <Contenedor display2="none" df="flex">
                    <Contenedor >
                        <Textbox onChange={ onMostar } display3="none"
                        ref={txt__Search} right="40px" sizeH="38px" 
                        sizeW2="100%" sizeW="40vw"  type="text"/>

                        <Button hidden={mostar} onClick={ onSearch } 
                        right="1px" left="-31.1px" background="none" padding="9px" display2="none"><Icon  size="18px">{Close}</Icon></Button>
                    </Contenedor >
                    
                    

                    <Button padding="8px 25px" display2="none" background2="none"><Icon size="20px">{Search}</Icon></Button>
                </Contenedor>

                <Contenedor df="flex">
                    <Button padding2="0" display="none" display2="flex"  background2="none" onClick={() => onMostarbuscador()}>
                        <Icon size="20px">{Search}</Icon>
                    </Button>
                    
                    <Link right="15px" left="15px" href="#">
                        <Icon  size="18px">{Video}</Icon>
                    </Link>

                    <Button right="15px" left="8px" right2="8" background="none">
                        <Icon size="18px">{Bell}</Icon>
                    </Button>
                    
                    <Image right="10px" elipce="50%" c="pointer" size="31px" src={user}/>
                </Contenedor>
            </Contenedor>
        </HeaderNav>
    );
}