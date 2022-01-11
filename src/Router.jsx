import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContenidoPrincipal from "./Contenido/ContenidoPrincipal";
export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ContenidoPrincipal/>}/>
            </Routes>
        </BrowserRouter>
    );
}
