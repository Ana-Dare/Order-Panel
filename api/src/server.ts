import express from "express";
import { OrderStore } from "./store.js";
import type { OrderState } from "./types.js";
import http from "http";
import cors from "cors"; // Adicionar import
import { Server } from "socket.io";

//Colocar em todos os métods um aviso que algo mudou

const app = express();
const store = new OrderStore();
const server = http.createServer(app);
const PORT = 3000;

// Middleware - ADICIONAR ESTAS LINHAS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  }),
);
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log(`Novo cliente conectado: ${socket.id}`);

  socket.on("edit_order", (data) => {
    socket.emit("update_order", data);
  });

  socket.on("disconnect", () => {
    console.log(`Cliente desconectado: ${socket.id}`);
  });
});

// GET /api/orders - List all orders
app.get("/api/orders", (req, res) => {
  const orders = store.getAll();
  res.status(200).json(orders);
});

server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📋 Endpoints disponíveis:`);
  console.log(`   GET    /api/orders`);
  console.log(`   POST   /api/orders`);
  console.log(`   PATCH  /api/orders/:id`);
  console.log(`   DELETE /api/orders/:id`);
});

// POST /api/orders - Create new order
app.post("/api/orders", (req, res) => {
  try {
    const { description } = req.body;
    if (!description) {
      return res.status(400).json({ error: "Description is required" });
    }
    const order = store.create(description);
    io.emit("update_orders");
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// PATCH /api/orders/:id - Update order state
app.patch("/api/orders/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { state } = req.body;

    if (!state) {
      return res.status(400).json({ error: "State is required" });
    }

    const order = store.update(id, state as OrderState);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    io.emit("update_orders");
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// DELETE /api/orders/:id - Delete order
app.delete("/api/orders/:id", (req, res) => {
  const { id } = req.params;
  const deleted = store.delete(id);

  if (!deleted) {
    return res.status(404).json({ error: "Order not found" });
  }
  io.emit("update_orders");
  res.status(204).send();
});
