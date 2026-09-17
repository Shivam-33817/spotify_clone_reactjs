
import Button from './component/Button'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './component/navbar';
import Home from './Page/Home';
import Footer from './component/Footer';
import TrendingSection from './component/Songd';

import Timer from './Page/Timer';
function App () {

 return ( 
 
 <BrowserRouter>
 <Routes>
 <Route path = "/timer" element={<Timer/>}/>
 <Route path ="/navbar" element={<Navbar/>}/>
 <Route path="/" element={<Home/>}/>
 <Route path='/footer' element={<Footer/>}/>
 <Route path='/trendingsection' element={<TrendingSection/>}/>
 </Routes>



 </BrowserRouter>
   

 )
}

export default App
