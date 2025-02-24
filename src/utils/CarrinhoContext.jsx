import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Função para carregar o carrinho do localStorage
    const loadCartFromLocalStorage = () => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    };

    const [cart, setCart] = useState(loadCartFromLocalStorage);

    // Atualiza o carrinho no localStorage sempre que ele mudar
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Função para adicionar um item ao carrinho
    const addToCart = (item) => {
        setCart((prevCart) => {
            // Adiciona o item como um novo objeto, independentemente de já existir no carrinho
            return [...prevCart, { ...item }];
        });
    };

    const removeFromCart = (id) => {
        // Encontrar o índice do item que queremos remover
        const indexToRemove = cart.findIndex((item) => item.id === id);

        if (indexToRemove !== -1) {
            // Cria uma cópia do carrinho e remove apenas o item no índice encontrado
            const updatedCart = [
                ...cart.slice(0, indexToRemove), // Itens antes do item removido
                ...cart.slice(indexToRemove + 1), // Itens depois do item removido
            ];

            setCart(updatedCart); // Atualiza o estado do carrinho
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
