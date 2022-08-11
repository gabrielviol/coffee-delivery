export interface CartItem {
    id: number,
    amount: number
  }
  
  export interface Cart {
    items: CartItem[],
    addItem: (items: CartItem) => void,
    removeItem: (items: CartItem) => void
  }