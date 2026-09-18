
import Button from './component/Button'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Page/Home';
import Artiest from './component/Artiest';
import Searchbar from './component/Searchbar';


function App () {

 return ( 
 
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path='artiest'element={<Artiest/>}/>
 <Route path='searchbar'element={<Searchbar/>}/>
 </Routes>



 </BrowserRouter>
   

 )
}

export default App
