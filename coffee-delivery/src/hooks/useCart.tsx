import { createContext, ReactNode, useState } from "react";
import { CoffeeType } from "../coffees";

interface CartContextProviderProps {
  children: ReactNode;
}

export interface UpdateCartItem extends CoffeeType{
  amount: number
}

export interface Cart {
  items: UpdateCartItem[],
  addItem: (items: UpdateCartItem) => void,
  removeItem: (items: UpdateCartItem) => void
}

export const useCart = createContext<Cart>({} as Cart);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [items, setItems] = useState<UpdateCartItem[]>([]);

  function addItem (item: UpdateCartItem){
    const updatedCart = [...items];
    const coffeeExists = updatedCart.find(items => items.id === item.id)
    const currentAmount = coffeeExists ? coffeeExists.amount : 0;
    const amount = currentAmount + 1;


    if(coffeeExists){
      coffeeExists.amount = amount;
    } else {
      updatedCart.push(item);
    }
    setItems(updatedCart)
    console.log(updatedCart)
    

  }

  
  const removeItem = (item: UpdateCartItem) => {
    const updatedCart = [...items];
    const coffeeIndex = updatedCart.findIndex(items => items.id === item.id)

    if(coffeeIndex >= 0){
      updatedCart.splice(coffeeIndex, 1)
      setItems(updatedCart)
      console.log(updatedCart)
    }else{
      throw Error();
    }

  }

  return (
    <useCart.Provider
      value={{
        items,
        addItem,
        removeItem
      }}
    >
      {children}
    </useCart.Provider>
  )
}