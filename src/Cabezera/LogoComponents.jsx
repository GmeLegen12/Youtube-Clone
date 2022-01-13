import { Image, Icon,  Button, Contenedor, Link} from "./index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../../assets/youtube-logo-2020.svg";
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function LogoComponents(props){
    const Bars = <FontAwesomeIcon icon={faBars}/>

    return(
        <Contenedor df="flex">
                <Button left2="7px" left="20px" background="none" onClick={props.barraActive} ><Icon size="22px" >{Bars}</Icon></Button>
                <Link left="21px" href="/">
                    <Image c="pointer" size="93px" src={logo}/>
                </Link>
                
        </Contenedor>
    
    )
}