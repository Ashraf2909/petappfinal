import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Posts from "./Posts";
import Detail from './Detail';
import Create from "./Create";
import Footer from "./Footer";

function App() {
    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Posts />}></Route>
                <Route path="/read/:id" element={<Detail />}></Route>
                <Route path="/newblog" element={<Create />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default App;