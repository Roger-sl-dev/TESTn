import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './Routes'
import CartProvider from './utils/CarrinhoContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>


    <Routes/>
    </CartProvider>
    
  </StrictMode>,
)
