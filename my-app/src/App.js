import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Register from "./components/Register"
import Categories from "./components/Categories"
import {OrderSummary} from "./components/OrderSummary"
import Navbar from "./components/Navbar"
import { NoMatch } from "./components/NoMatch"
import  Session  from "./components/Session"
import NewCategorie from './components/NewCategorie';
import './App.css';



function App() {
  return (
    
    <div className="flex justify-center">
    <div className="w-2/4">
   
        <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="categories" element={ <Categories /> }>
          <Route path="categorie/:catId" element={<NewCategorie />}>
            <Route path="session/:sessionId" element={<Session />} />
          </Route> 
        </Route>
        <Route path="register" element={ <Register/> } />
        <Route path="order-summary" element={ <OrderSummary/> } />
        <Route path="*" element={ <NoMatch />} />

      </Routes>
     
    </div> 
      

    </div>
  )
}

export default App