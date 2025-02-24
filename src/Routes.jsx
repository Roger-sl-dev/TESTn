import { BrowserRouter, Route, Routes,  } from "react-router-dom"
import Home from "./pages/Home"
import Produtos from "./pages/Produtos"
import CepInput from "./components/layout/CepInput"
import EnderesoForm from "./components/layout/EnderesoForm"
import Checkout from "./pages/Checkout"
import Sacola from "./pages/Sacola"
import Pesquisa from "./pages/Pesquisa"
import SearchFilter from "./pages/Pesquisa"
import Promoções from "./pages/Promoções"



export default()=>{
    return(
        <>
        
        <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="produto/:id" element={<Produtos/>}/>
          <Route path="sacola" element={<Sacola/>}/>
          <Route path="cep" element={<CepInput />} />
         <Route path="endereço" element={<EnderesoForm />} />
         <Route path="checkout" element={<Checkout/>} />
         <Route  path="pesquisa" element={<SearchFilter/>}/>
         <Route path="promo" element={<Promoções/>}/>
      
         </Routes>
        </BrowserRouter>
        </>

    )
}