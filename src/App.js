import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Home from "./Home"; 
import Layout from "./Layout";
import Cafe from "./Cafe";
import Kalkulacka from "./Kalkulacka/Kalkulacka";
import Pocitadlo from "./Pocitadlo";
import Auta from "./Auta/Auta";
import Pocitadlo2 from "./Pocitadlo2";
import Profil from "./Profil";
import Prumer from "./Prumer/Prumer";
import Ukolnicek from "./Ukolnicek/Ukolnicek";
import Eshop from "./E-shop/Eshop";
import Eshop2 from "./E-shop2/Eshop2";
import Eshop3 from "./Eshop3";

function App() {
  
  
  return (
    <>
    <HashRouter basename='/'>
    <Routes>
    <Route path="/" element={<Layout></Layout>} >
    <Route index element={<Home></Home>}/>
    <Route path="/cafe" element={<Cafe></Cafe>}/>
    <Route path="/kalkulacka" element={<Kalkulacka></Kalkulacka>}/>
    <Route path="/pocitadlo" element={<Pocitadlo></Pocitadlo>}/>
    <Route path="/pocitadlo2" element={<Pocitadlo2></Pocitadlo2>}/>
    <Route path="/auta" element={<Auta></Auta>}/>
    <Route path="/profil" element={<Profil></Profil>}/>
    <Route path="/prumer" element={<Prumer></Prumer>}/>
    <Route path="/ukolnicek" element={<Ukolnicek></Ukolnicek>}/>
    <Route path="/eshop" element={<Eshop></Eshop>}></Route>
    <Route path="/eshop2" element={<Eshop2></Eshop2>}></Route>
    <Route path="/eshop3" element={<Eshop3></Eshop3>}></Route>
</Route>
   </Routes>
    </HashRouter>

  
    </>
  )

}




export default App;
