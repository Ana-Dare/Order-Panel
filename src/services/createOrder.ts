import { type ICreateOrder, type IOrder } from "../interfaces/IOrder";
import { api } from "./baseApi";

export async function createOrder(newOrder: ICreateOrder) {
  try {
    const res = await api.post<IOrder>("/api/orders", {
      description: newOrder.description,
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.error("Não foi possível enviar o pedido", error);
  }
}
