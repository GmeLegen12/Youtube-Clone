import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook  } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faAddressBook } from '@fortawesome/free-regular-svg-icons';

import { Link, Icon, H2} from "./Index";

export default function LinkCompletoComponents(){
    const Home = <FontAwesomeIcon icon={ faHome }/>
    const Explore = <FontAwesomeIcon icon={ faCompass }/>
    const Sub = <FontAwesomeIcon icon={ faAddressBook }/>
    const Book = <FontAwesomeIcon icon={ faBook } />
    return (
        <Fragment>
            <Link left="18" direc="row" BackHover="#fff" href="/" align="flex-start">
                <Icon colorF="Black" sizeF="25">{ Home }</Icon>
                <H2 colorF="Black" sizeF="18" left="29">Inicio</H2>
            </Link>
            
            <Link left="18" direc="row" BackHover="#fff" href="/feed/explore" align="flex-start">
                <Icon colorF="Black" sizeF="25">{ Explore }</Icon>
                <H2 colorF="Black" sizeF="18" left="29">Explorar</H2>
            </Link>
            
            <Link left="18" direc="row" BackHover="#fff" href="/feed/subscriptions" align="flex-start">
                <Icon colorF="Black" sizeF="25">{ Sub }</Icon>
                <H2 colorF="Black" sizeF="18" left="29">Subcripciones</H2>
            </Link>

            <Link left="18" direc="row" BackHover="#fff" href="/feed/library" align="flex-start">
                <Icon colorF="Black" sizeF="25">{ Book }</Icon>
                <H2 colorF="Black" sizeF="18" left="29">Biblioteca</H2>
            </Link>
        </Fragment>
    );
}