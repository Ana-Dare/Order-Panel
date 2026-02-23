# Order Panel API

API REST simples para gerenciar pedidos com três estados: novo, preparando e finalizado.

## 🚀 Instalação e Execução

```bash
# Instalar dependências
cd api
npm install

# Iniciar servidor em modo desenvolvimento
npm run dev
```

A API estará disponível em `http://localhost:3000`

## 📋 Endpoints

### GET /api/orders

Lista todos os pedidos.

**Response:**

```json
[
  {
    "id": "uuid",
    "description": "Pedido 1",
    "state": "novo",
    "createdAt": "2024-01-01T10:00:00.000Z"
  }
]
```

### POST /api/orders

Cria um novo pedido.

**Request Body:**

```json
{
  "description": "Novo pedido"
}
```

**Response (201):**

```json
{
  "id": "uuid",
  "description": "Novo pedido",
  "state": "novo",
  "createdAt": "2024-01-01T10:00:00.000Z"
}
```

**Error (400):**

```json
{
  "error": "Description cannot be empty or whitespace only"
}
```

### PATCH /api/orders/:id

Atualiza o estado de um pedido.

**Request Body:**

```json
{
  "state": "preparando"
}
```

Estados válidos: `"novo"`, `"preparando"`, `"finalizado"`

**Response (200):**

```json
{
  "id": "uuid",
  "description": "Pedido 1",
  "state": "preparando",
  "createdAt": "2024-01-01T10:00:00.000Z"
}
```

**Error (404):**

```json
{
  "error": "Order not found"
}
```

**Error (400):**

```json
{
  "error": "Invalid state value"
}
```

### DELETE /api/orders/:id

Remove um pedido.

**Response (204):** Sem conteúdo

**Error (404):**

```json
{
  "error": "Order not found"
}
```

## 🧪 Exemplos de Uso com curl

```bash
# Listar todos os pedidos
curl http://localhost:3000/api/orders

# Criar novo pedido
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{"description": "Pizza Margherita"}'

# Atualizar estado do pedido
curl -X PATCH http://localhost:3000/api/orders/UUID_AQUI \
  -H "Content-Type: application/json" \
  -d '{"state": "preparando"}'

# Deletar pedido
curl -X DELETE http://localhost:3000/api/orders/UUID_AQUI
```

## 🔧 Configuração

- **Porta:** 3000 (padrão)
- **CORS:** Configurado para aceitar requisições de `http://localhost:5173` (Vite)
- **Storage:** Em memória (dados são perdidos ao reiniciar o servidor)

## 📦 Tecnologias

- Node.js
- Express.js
- TypeScript
- uuid (geração de IDs)
- cors (suporte CORS)
