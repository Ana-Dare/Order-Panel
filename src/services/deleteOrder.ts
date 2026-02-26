import { api } from "./baseApi";

export async function deleteOrder(id: string) {
  try {
    const res = await api.delete(`/api/orders/${id}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.error("Erro ao deletar pedido", error);
  }
}
