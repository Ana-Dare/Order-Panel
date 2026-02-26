export type IOrderState = "novo" | "preparando" | "finalizado";

export interface IOrder {
  id: string; //id do pedido
  description: string; // produtos do pedido
  state: IOrderState; // estado do pedido
  createdAt: string; // data do pedido
}

export interface ICreateOrder {
  description: string;
}

export interface IUpdateOrder {
  id: string;
  stateOrder: IOrderState;
}
