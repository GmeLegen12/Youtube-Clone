import { Fragment } from "react";
import { Link, Icon, H2 } from "./Index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook  } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faAddressBook } from '@fortawesome/free-regular-svg-icons';


export default function LinkComponents(){
    const Home = <FontAwesomeIcon icon={ faHome }/>
    const Explore = <FontAwesomeIcon icon={ faCompass }/>
    const Sub = <FontAwesomeIcon icon={ faAddressBook }/>
    const Book = <FontAwesomeIcon icon={ faBook } />
    return (
        <Fragment>
            <Link Background="none" ancho="50" left="11" href="/">
                <Icon sizeF="25" colorF="black">{ Home }</Icon>
                <H2 sizeF="10" colorF="black">Inicio</H2>
            </Link>
                    
            <Link Background="none" ancho="50" left="11" href="/feed/explore">
                <Icon sizeF="25" colorF="black">{ Explore }</Icon>
                <H2 sizeF="10" colorF="black">Explorar</H2>
            </Link>
                    
            <Link Background="none" ancho="50" left="11" href="/feed/subscriptions">
                <Icon sizeF="25" colorF="black">{ Sub }</Icon>
                <H2 sizeF="10" colorF="black">Subcripciones</H2>
            </Link>
                    
            <Link Background="none" ancho="50" left="11" href="/feed/library">
                <Icon sizeF="25" colorF="black">{ Book }</Icon>
                <H2 sizeF="10" colorF="black">Biblioteca</H2>
            </Link>
        </Fragment>
    );

}