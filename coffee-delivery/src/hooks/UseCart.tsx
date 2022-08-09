import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';

export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
}

export interface Stock {
    id: number;
    amount: number;
}

interface CartProviderProps {
    children: ReactNode;
}

// interface UpdateProductAmount {
//     productId: number;
//     amount: number;
// }

interface CartContextData {
    cart: Product[];
    addCoffee: (productId: number) => Promise<void>;
    // removeProduct: (productId: number) => void;
    // updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<Product[]>(() => {
        const storagedCart = localStorage.getItem('@RocketShoes:cart');

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

    const prevCartRef = useRef<Product[]>();

    useEffect(() => {
        prevCartRef.current = cart;
    })

    const cartPreviousValue = prevCartRef.current ?? cart;

    useEffect(() => {
        if (cartPreviousValue !== cart) {
            localStorage.setItem('@RocketShoes:cart', JSON.stringify(cart));
        }
    }, [cart, cartPreviousValue]);

    const addCoffee = async (productId: number) => {
        const updatedCart = [...cart];
        const productExists = updatedCart.find(product => product.id === productId);

        const currentAmount = productExists ? productExists.amount : 0;


        setCart(updatedCart);

        return (
            <CartContext.Provider
                value={{ cart, addCoffee }}
            >
                {children}
            </CartContext.Provider>
        );
    }
}

export function UseCart(): CartContextData {
    const context = useContext(CartContext);

    return context;
}