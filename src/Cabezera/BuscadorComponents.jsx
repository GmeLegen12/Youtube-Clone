import { Icon, Textbox, Button, Contenedor} from "./index";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,  faTimes,  } from '@fortawesome/free-solid-svg-icons';

export default function BuscadorComponents (){
    const Search = <FontAwesomeIcon icon={faSearch}/>
    const Close = <FontAwesomeIcon icon={faTimes}/>
    const txt__Search = useRef("")
    const [ mostar, ocultar ] = useState(true)

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
    
    return (
        <Contenedor display2="none" df="flex">
            <Contenedor >
                <Textbox onChange={ onMostar } display3="none"
                    ref={txt__Search} right="40px" sizeH="38px" 
                    sizeW2="100%" sizeW="40vw"  type="text"/>

                    <Button hidden={mostar} onClick={ onSearch } 
                    right="1px" left="-31.1px" background="none" padding="9px"display2="none"><Icon  size="18px">{Close}</Icon></Button>
            </Contenedor >
                    
                    

            <Button padding="8px 25px" display2="none" background2="none"><Icon size="20px">{Search}</Icon></Button>
        </Contenedor>
    );
}