# Design Document

## Overview

A API de gerenciamento de pedidos será implementada como um servidor Express.js minimalista com armazenamento em memória. O design prioriza simplicidade e facilidade de configuração para permitir foco no aprendizado de React Query no frontend.

## Architecture

A arquitetura segue um padrão simples de três camadas:

1. **HTTP Layer**: Express.js gerencia rotas e middleware
2. **Business Logic Layer**: Funções puras que implementam a lógica de negócio
3. **Data Layer**: Armazenamento em memória usando um Map JavaScript

```
┌─────────────────┐
│  Express Routes │
└────────┬────────┘
         │
┌────────▼────────┐
│ Business Logic  │
└────────┬────────┘
         │
┌────────▼────────┐
│  In-Memory Store│
└─────────────────┘
```

## Components and Interfaces

### Order Model

```typescript
interface Order {
  id: string;
  description: string;
  state: "novo" | "preparando" | "finalizado";
  createdAt: string;
}
```

### API Endpoints

#### GET /api/orders

- Retorna todos os pedidos
- Response: `Order[]`
- Status: 200

#### POST /api/orders

- Cria um novo pedido
- Request Body: `{ description: string }`
- Response: `Order`
- Status: 201 (sucesso), 400 (validação falhou)

#### PATCH /api/orders/:id

- Atualiza o estado de um pedido
- Request Body: `{ state: 'novo' | 'preparando' | 'finalizado' }`
- Response: `Order`
- Status: 200 (sucesso), 400 (estado inválido), 404 (não encontrado)

#### DELETE /api/orders/:id

- Remove um pedido
- Response: vazio
- Status: 204 (sucesso), 404 (não encontrado)

### Storage Interface

```typescript
interface OrderStore {
  getAll(): Order[];
  getById(id: string): Order | undefined;
  create(description: string): Order;
  update(id: string, state: Order["state"]): Order | undefined;
  delete(id: string): boolean;
}
```

## Data Models

### Order Entity

- **id**: UUID v4 gerado automaticamente
- **description**: String não vazia (1-500 caracteres)
- **state**: Enum com valores 'novo', 'preparando', 'finalizado'
- **createdAt**: ISO 8601 timestamp

### Validation Rules

- Description: deve conter pelo menos um caractere não-whitespace
- State: deve ser exatamente um dos três valores permitidos
- ID: gerado pelo sistema, não aceito em criação

##

Correctness Properties

_A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees._

Property 1: List returns all stored orders
_For any_ set of orders in the store, calling the list endpoint should return all orders with their complete data (id, description, state, createdAt)
**Validates: Requirements 1.1**

Property 2: Create assigns unique IDs
_For any_ sequence of order creations with valid descriptions, all generated order IDs should be unique
**Validates: Requirements 2.3**

Property 3: Create initializes with "novo" state
_For any_ valid order description, creating an order should result in an order with state "novo"
**Validates: Requirements 2.1**

Property 4: Whitespace-only descriptions are rejected
_For any_ string composed entirely of whitespace characters, attempting to create an order should be rejected with status 400
**Validates: Requirements 2.2**

Property 5: State update modifies order
_For any_ existing order and any valid state value, updating the order state should result in the order having the new state
**Validates: Requirements 3.1**

Property 6: Invalid states are rejected
_For any_ state value that is not "novo", "preparando", or "finalizado", attempting to update an order should be rejected with status 400
**Validates: Requirements 3.2**

Property 7: Delete removes order
_For any_ existing order, deleting it should result in the order no longer appearing in the list of all orders
**Validates: Requirements 4.1**

Property 8: Error responses are valid JSON
_For any_ error condition (invalid input, not found, etc.), the response should be valid JSON containing an error message field
**Validates: Requirements 5.4**

## Error Handling

### Error Response Format

Todas as respostas de erro seguem o formato:

```json
{
  "error": "Mensagem descritiva do erro"
}
```

### Error Scenarios

1. **400 Bad Request**
   - Descrição vazia ou apenas whitespace
   - Estado inválido na atualização
   - Corpo da requisição malformado

2. **404 Not Found**
   - Pedido não existe ao tentar atualizar
   - Pedido não existe ao tentar deletar

3. **500 Internal Server Error**
   - Erros inesperados do servidor
   - Falhas na geração de ID

## Testing Strategy

### Unit Testing

A estratégia de testes unitários foca em:

- Validação de entrada (descrições, estados)
- Lógica de negócio (criação, atualização, deleção)
- Geração de IDs únicos
- Formatação de respostas de erro

### Property-Based Testing

Utilizaremos **fast-check** como biblioteca de property-based testing para JavaScript/TypeScript.

Configuração:

- Cada teste de propriedade deve executar no mínimo 100 iterações
- Cada teste deve referenciar explicitamente a propriedade do design usando o formato: `**Feature: order-panel-api, Property {number}: {property_text}**`

Propriedades a serem testadas:

- Property 1: List returns all stored orders
- Property 2: Create assigns unique IDs
- Property 3: Create initializes with "novo" state
- Property 4: Whitespace-only descriptions are rejected
- Property 5: State update modifies order
- Property 6: Invalid states are rejected
- Property 7: Delete removes order
- Property 8: Error responses are valid JSON

### Integration Testing

Testes de integração verificarão:

- Endpoints HTTP completos com Express
- Serialização/deserialização JSON
- Headers CORS
- Códigos de status HTTP corretos

## Implementation Notes

### Technology Stack

- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Language**: TypeScript
- **ID Generation**: uuid library
- **Testing**: Vitest + fast-check

### Project Structure

```
api/
├── src/
│   ├── server.ts          # Express setup e inicialização
│   ├── routes.ts          # Definição de rotas
│   ├── store.ts           # Armazenamento em memória
│   ├── validation.ts      # Funções de validação
│   └── types.ts           # Definições de tipos
├── tests/
│   ├── unit/
│   │   ├── store.test.ts
│   │   └── validation.test.ts
│   └── properties/
│       └── orders.property.test.ts
├── package.json
└── tsconfig.json
```

### CORS Configuration

```typescript
app.use(
  cors({
    origin: "http://localhost:5173", // Vite default port
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
  }),
);
```

### Startup

A API deve iniciar com um único comando:

```bash
npm run dev
```

E rodar na porta 3000 por padrão.
