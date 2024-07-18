import { create } from "zustand";
import Toast from "react-native-toast-message";

export interface IOrderItem {
  id: number,
  name: string,
  quantity: number,
  price:number,
  subtotal:number
}

export interface IOrderItemState {
  items: IOrderItem[];
  addOrderItem: (data: IOrderItem) => void;

}

export const orderItemStore = create<IOrderItemState>((set, get) => ({
  items: [],
  addOrderItem:(item:IOrderItem)=>{

  }

}));
