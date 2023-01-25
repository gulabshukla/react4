import Home from "./component/Home";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Student from "./component/Student";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/student" element={<Student/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;


