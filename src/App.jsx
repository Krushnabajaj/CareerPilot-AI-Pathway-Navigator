import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About/>}></Route>
          <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
