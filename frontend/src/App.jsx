import Home from "./Pages/Home";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Movie from "./Pages/Movie";


function App() {

        return(
                <Router>
                        <Routes>
                                <Route path="/" element={<Home/>}></Route>
                                <Route path="/movie/:id" element={<Movie />}></Route>
                        </Routes>
                </Router>
        )
}



export default App;





