import { useRef, useState } from "react";

import { Icon, Textbox, Button, Contenedor } from "./index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faArrowUp } from '@fortawesome/free-solid-svg-icons';



export default function NavegationMovileComponents(props){

    const Search = <FontAwesomeIcon icon={faSearch}/>
    const Close = <FontAwesomeIcon icon={faTimes}/>
    const arrowTop = <FontAwesomeIcon icon={faArrowUp}/>

    const txt__SearchMovil = useRef("")

    

    const [ clear, setClear ] = useState(true)

    
    const onMostrarMovil = () => {
        if (txt__SearchMovil.current.value == ""){
            
            setClear(true);
        } else {
            setClear(false);
        }
    }



    return (
        <Contenedor  justify="center" align="center" 
            top={props.mostar ?"-369px" : "0px"} 
            background="#fff" 
            display2="flex" left2="-100vw"
            df="none" sizeW2="100%" 
            sizeH2="100%" z="2" 
            t="margin-top 300ms ease-in">

                    <Button onClick={ props.getMostar } 
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
    );
}