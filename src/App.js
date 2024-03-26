import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Posts from "./components/Posts";
import Detail from './components/Detail';
import Create from "./components/Create";
import Footer from "./components/Footer";
import User from "./components/UserUI/User";

function App() {
    return(
        <BrowserRouter>
            <Nav/>{}
            <Routes >
                <Route path="/" element={<Posts />}></Route>
                <Route path="/read/:id" element={<Detail />}></Route>
                <Route path="/newblog" element={<Create />}></Route>
                <Route path="/UserUI" element={<User />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default App;