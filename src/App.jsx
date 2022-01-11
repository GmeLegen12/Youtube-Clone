import { Fragment } from 'react';
import '../assets/App.css'
import Router from './Router'
import Cabezera from './Cabezera/Cabazera'
import Barralateral from "./Barralateral/Barralateral"
function App() {
  return (
    <Fragment>
        <Cabezera/>
        <Barralateral/>
        {/* <main>
          <Router/>
        </main> */}
    </Fragment>
  )
}

export default App
