import type { IOrder } from "../interfaces/IOrder";
import { api } from "./baseApi";

export async function listOrders(): Promise<IOrder[]> {
  try {
    const res = await api.get<IOrder[]>("/api/orders");
    return res.data;
  } catch (error) {
    console.error("Não foi possível buscar os pedidos", error);
    return [];
  }
}
