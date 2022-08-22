import { createContext, ReactNode, useState } from "react";
import { CoffeeType } from "../coffees";

interface CartContextProviderProps {
  children: ReactNode;
}

export interface UpdateCartItem extends CoffeeType {
  amount: number
}

export interface AdressInfo {
  cep: number;
  rua: string;
  numero: number;
  cidade: string;
  complemento?: string;
  uf: string;
  pagamento: string;
}

export interface Cart {
  address: AdressInfo[],
  items: UpdateCartItem[],
  addAdress: (info:AdressInfo) => void,
  addItem: (items: UpdateCartItem) => void,
  removeItem: (items: UpdateCartItem) => void
  updatedAmount: ({id, amount}: UpdateCartItem) => void
}

export const useCart = createContext<Cart>({} as Cart);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [items, setItems] = useState<UpdateCartItem[]>([]);
  const [address, setAdress] = useState<AdressInfo[]>([]);

  function addItem(item: UpdateCartItem) {
    const updatedCart = [...items];
    const coffeeExists = updatedCart.find(items => items.id === item.id)
    const currentAmount = coffeeExists ? coffeeExists.amount : 0;
    const amount = currentAmount + item.amount;

    if (coffeeExists) {
      coffeeExists.amount = amount;
    } else {
      updatedCart.push(item);
    }
    setItems(updatedCart)
    console.log(updatedCart)
  }

  function addAdress(info: AdressInfo){
    const attAdress = [...address];
    const cepExist = attAdress.find(address => address.cep === info.cep)

    if(cepExist) {
      Error('CEP existente');
    } else {
      attAdress.push(info);
    }
    setAdress(attAdress)
  }

  const removeItem = (item: UpdateCartItem) => {
    const updatedCart = [...items];
    const coffeeIndex = updatedCart.findIndex(items => items.id === item.id)

    if (coffeeIndex >= 0) {
      updatedCart.splice(coffeeIndex, 1)
      setItems(updatedCart)
      console.log(updatedCart)
    } else {
      throw Error();
    }
  }

  function updatedAmount({id, amount}: UpdateCartItem){
    const updatedCart = [...items];
    const coffeeExists = updatedCart.find(items => items.id === id)

    if(amount >= 1 ){
      if (coffeeExists) {
        coffeeExists.amount = amount;
        setItems(updatedCart);
        console.log(updatedCart)
      }
    } 

    
  }

  return (
    <useCart.Provider
      value={{
        address,
        items,
        addAdress,
        addItem,
        removeItem,
        updatedAmount
      }}
    >
      {children}
    </useCart.Provider>
  )
}