export type OrderState = "novo" | "preparando" | "finalizado";

export interface Order {
  id: string; //id do pedido
  description: string; // produtos do pedido
  state: OrderState; // estado do pedido
  createdAt: string; // data do pedido
}
