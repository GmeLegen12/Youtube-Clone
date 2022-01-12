import {  Image, Icon,  Button, Contenedor, Link } from "./index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faVideo } from '@fortawesome/free-solid-svg-icons';



import { faBell } from '@fortawesome/free-regular-svg-icons';
import user from '../../assets/user.svg';

export default function NavegatioComponents(props){

    const Bell = <FontAwesomeIcon icon={faBell}/>
    const Search = <FontAwesomeIcon icon={faSearch}/>
    const Video = <FontAwesomeIcon icon={faVideo}/>
    
    


    

    return(
        <Contenedor df="flex">
            <Button padding2="0" display="none" display2="flex"  background2="none" onClick={props.getMostar }>
                <Icon size="20px">{Search}</Icon>
            </Button>
                    
            <Link right="15px" left="15px" href="#">
                <Icon  size="18px">{Video}</Icon>
            </Link>

            <Button right="15px" left="8px" right2="8" background="none">
                <Icon size="18px">{Bell}</Icon>
            </Button>
            
            <Image dp="none" right="10px" elipce="50%" c="pointer" size="31px" src={user}/>
            
            
        </Contenedor>
    );
}