# Requirements Document

## Introduction

Este documento descreve os requisitos para uma API REST simples que gerencia pedidos em um painel com três estados: novo, preparando e finalizado. A API foi projetada para ser minimalista, fornecendo apenas as funcionalidades essenciais para permitir o aprendizado de React Query (TanStack Query) e hooks no frontend.

## Glossary

- **Order Management System**: O sistema backend que gerencia pedidos através de uma API REST
- **Order**: Uma entidade que representa um pedido com identificador único, descrição e estado
- **Order State**: O estado atual de um pedido, podendo ser "novo", "preparando" ou "finalizado"
- **Client Application**: A aplicação frontend React que consome a API

## Requirements

### Requirement 1

**User Story:** Como desenvolvedor frontend, quero listar todos os pedidos, para que eu possa exibi-los no painel organizado por estado.

#### Acceptance Criteria

1. WHEN the Client Application requests all orders THEN the Order Management System SHALL return a list containing all orders with their identifiers, descriptions, and states
2. WHEN the order list is empty THEN the Order Management System SHALL return an empty array
3. WHEN the request is successful THEN the Order Management System SHALL respond with HTTP status 200

### Requirement 2

**User Story:** Como desenvolvedor frontend, quero criar novos pedidos, para que eu possa adicionar pedidos ao painel.

#### Acceptance Criteria

1. WHEN the Client Application submits a valid order description THEN the Order Management System SHALL create a new order with state "novo" and return the created order
2. WHEN the Client Application submits an empty or whitespace-only description THEN the Order Management System SHALL reject the request with HTTP status 400
3. WHEN an order is created THEN the Order Management System SHALL assign a unique identifier to the order
4. WHEN an order is created THEN the Order Management System SHALL respond with HTTP status 201

### Requirement 3

**User Story:** Como desenvolvedor frontend, quero atualizar o estado de um pedido, para que eu possa mover pedidos entre as colunas do painel.

#### Acceptance Criteria

1. WHEN the Client Application requests to update an order state with a valid state value THEN the Order Management System SHALL update the order state and return the updated order
2. WHEN the Client Application requests to update an order with an invalid state value THEN the Order Management System SHALL reject the request with HTTP status 400
3. WHEN the Client Application requests to update a non-existent order THEN the Order Management System SHALL respond with HTTP status 404
4. WHEN an order state is updated THEN the Order Management System SHALL respond with HTTP status 200

### Requirement 4

**User Story:** Como desenvolvedor frontend, quero deletar pedidos, para que eu possa remover pedidos finalizados ou cancelados do painel.

#### Acceptance Criteria

1. WHEN the Client Application requests to delete an existing order THEN the Order Management System SHALL remove the order and respond with HTTP status 204
2. WHEN the Client Application requests to delete a non-existent order THEN the Order Management System SHALL respond with HTTP status 404

### Requirement 5

**User Story:** Como desenvolvedor frontend, quero que a API seja simples e rápida de configurar, para que eu possa focar no aprendizado de React Query e hooks.

#### Acceptance Criteria

1. THE Order Management System SHALL use in-memory storage without requiring database configuration
2. THE Order Management System SHALL support CORS to allow requests from the Client Application
3. THE Order Management System SHALL run on a single command without complex setup
4. THE Order Management System SHALL provide clear error messages in JSON format
