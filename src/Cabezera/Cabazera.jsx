import { useState } from "react";

import { HeaderNav, Contenedor } from "./index";


import LogoComponents from "./LogoComponents"
import BuscadorComponents from "./BuscadorComponents"
import NavegatioComponents from "./NavegatioComponents"
import NavegationMovileComponents from "./NavegationMovileComponents"

export default function Cabezera (){

    const [ mostrarM, getMostarM ] = useState(true)

    return (
        <HeaderNav>
            <Contenedor display2="flex"  sizeW="100%" sizeH="100%" df="flex" justify="space-between">
                <LogoComponents/>
                
                <BuscadorComponents/>

                <NavegatioComponents getMostar={() => getMostarM(false) }/>
                
            </Contenedor>

            <NavegationMovileComponents mostar={ mostrarM } getMostar={() => getMostarM(true) }/>

            
        </HeaderNav>
    );
}