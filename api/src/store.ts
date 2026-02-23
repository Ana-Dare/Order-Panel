import { v4 as uuidv4 } from "uuid";
import type { Order, OrderState } from "./types.js";

export class OrderStore {
  private orders: Map<string, Order> = new Map();

  getAll(): Order[] {
    return Array.from(this.orders.values());
  }

  getById(id: string): Order | undefined {
    return this.orders.get(id);
  }

  create(description: string): Order {
    // Validate description
    if (!description || description.trim().length === 0) {
      throw new Error("Description cannot be empty or whitespace only");
    }

    const order: Order = {
      id: uuidv4(),
      description: description.trim(),
      state: "novo",
      createdAt: new Date().toISOString(),
    };

    this.orders.set(order.id, order);
    return order;
  }

  update(id: string, state: OrderState): Order | undefined {
    const order = this.orders.get(id);
    if (!order) {
      return undefined;
    }

    // Validate state
    const validStates: OrderState[] = ["novo", "preparando", "finalizado"];
    if (!validStates.includes(state)) {
      throw new Error("Invalid state value");
    }

    order.state = state;
    return order;
  }

  delete(id: string): boolean {
    return this.orders.delete(id);
  }
}
