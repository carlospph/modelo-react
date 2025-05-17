import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Header from "../components/Header";

import Home from "../pages/Home";
import About from "../pages/About";
import Contatos from "../pages/Contatos";
import Error404 from "../pages/Error404";


function Paths() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/About"} element={<About/>} />
          <Route path={"/Contatos"} element={<Contatos />} />
          <Route path={"/*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Paths;