import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contato from "../pages/Contato";
import Home from "../pages/Home";
import Projetos from "../pages/Projetos";
import Voluntariado from "../pages/Voluntariado";

export default function Rotas () {
    return (
        <BrowserRouter>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/voluntariado" element={<Voluntariado />} />
            </Routes>
        </BrowserRouter>
    )
}