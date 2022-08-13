import { createContext, ReactNode, useState } from "react";
import { CoffeeType } from "../coffees";

interface CartContextProviderProps {
  children: ReactNode;
}

export interface UpdateCartItem {
  id: number,
  amount: number
}

export interface Cart {
  items: CoffeeType[],
  addItem: (items: UpdateCartItem) => void,
  removeItem: (items: UpdateCartItem) => void
}

export const UseCart = createContext<Cart>({} as Cart);

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
      const coffee = item.id
      const newCoffee = {
        coffee,
        amount: 1
      }
      updatedCart.push(newCoffee);
    }
    setItems(updatedCart)
    console.log(coffeeExists)
    

  }

  
  const removeItem = (item: UpdateCartItem) => {
    console.log("Remove");
  }

  return (
    <UseCart.Provider
      value={{
        items,
        addItem,
        removeItem
      }}
    >
      {children}
    </UseCart.Provider>
  )
}