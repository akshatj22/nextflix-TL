import Home from "./Pages/Home";
import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {

        return(
                <Router>
                        <Routes>
                                <Route path="/" element={<Home/>}></Route>
                                <Route path="/movie/:id"></Route>
                        </Routes>
                </Router>
        )
}



export default App;





