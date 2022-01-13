import { Fragment, useState } from 'react';
import '../assets/App.css';

import Router from './Router';
import Cabezera from './Cabezera/Cabazera';
import Barralateral from "./Barralateral/Barralateral";
function App() {
  const [ abrirocerrarLateral, stadodeBarra ] = useState(true)

  return (
    <Fragment>
        <Cabezera abrirLateral={() => abrirocerrarLateral ? stadodeBarra(false) : stadodeBarra(true)} />
        <Barralateral stadoLateral={abrirocerrarLateral} />
        {/* <main>
          <Router/>
        </main> */}
    </Fragment>
  )
}

export default App
