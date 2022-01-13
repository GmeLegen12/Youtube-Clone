import { Image, Icon,  Button, Contenedor} from "./index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../../assets/youtube-logo-2020.svg";
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function LogoComponents(){
    const Bars = <FontAwesomeIcon icon={faBars}/>

    return(
        <Contenedor df="flex">
                <Button left2="7px" left="20px" background="none" ><Icon size="22px" >{Bars}</Icon></Button>
                <a href="/">
                    <Image c="pointer" size="93px" left="21px" src={logo}/>
                </a>
                
        </Contenedor>
    
    )
}