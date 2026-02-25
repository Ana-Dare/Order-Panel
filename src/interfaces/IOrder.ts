export type OrderState = "novo" | "preparando" | "finalizado";

export interface IOrder {
  id: string; //id do pedido
  description: string; // produtos do pedido
  state: OrderState; // estado do pedido
  createdAt: string; // data do pedido
}

export interface ICreateOrder {
  description: string;
}
