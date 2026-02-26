import type { IUpdateOrder } from "../interfaces/IOrder";
import { api } from "./baseApi";

export async function updateOrder({ id, stateOrder }: IUpdateOrder) {
  try {
    const res = await api.patch(`/api/orders/${id}`, {
      state: stateOrder,
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.error("Não foi possível atualizar pedido", error);
  }
}
