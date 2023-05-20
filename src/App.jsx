import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/shared/navbar/Navbar"
import Footer from "./components/footer/Footer"
import About from "./pages/About"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
