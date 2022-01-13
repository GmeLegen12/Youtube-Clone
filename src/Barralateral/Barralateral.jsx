
import { Fragment } from "react";
import { Navegation} from "./Index";
import MediaQuery from "react-responsive";

import {If, Then, Else} from 'react-if';

import LinkComponents from './LinkComponents';
import LinkCompletoComponents from './LinkCompletoComponents';
import LinkCompletoMovileComponents from './LinkCompletoMovileComponents'

export default function Barralateral(props){

    return (
        <Fragment>
            <MediaQuery minWidth={1313}>
                <Navegation align="flex-start" ancho={props.stadoLateral ?  "240" : "72"}>
                    <If condition={props.stadoLateral == false}>
                        <Then>
                            <LinkComponents/>
                        </Then>
                        <Else>
                            <LinkCompletoComponents/>
                        </Else>
                    </If>
                </Navegation>
            </MediaQuery>

            <MediaQuery maxWidth={1312}>
                <Navegation align="flex-start" ancho="72">
                    <LinkComponents/>
                    <LinkCompletoMovileComponents stadoLateral={props.stadoLateral}/>
                </Navegation>
            </MediaQuery>
            

        </Fragment>
        
    );
}