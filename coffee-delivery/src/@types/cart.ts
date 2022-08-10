export interface CartItem {
    id: number,
    quantity: number
  }
  
  export interface Cart {
    items: CartItem[],
    addItem: (items: CartItem) => void,
    removeItem: (items: CartItem) => void
  }