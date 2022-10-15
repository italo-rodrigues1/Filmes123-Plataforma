import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Filmes from "../views/Filmes";
import {AuthContextProvider} from '../context';

const RoutesViews = () => (
    <BrowserRouter>
        <AuthContextProvider>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/filmes" element={<Filmes/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </AuthContextProvider>
    </BrowserRouter>
)

export default RoutesViews;
