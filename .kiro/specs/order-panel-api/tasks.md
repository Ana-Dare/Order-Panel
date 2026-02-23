# Implementation Plan

- [ ] 1. Setup project structure and dependencies
  - Create api directory with TypeScript configuration
  - Install Express, uuid, cors, and type definitions
  - Install Vitest and fast-check for testing
  - Configure tsconfig.json for Node.js
  - Setup package.json scripts for dev and build
  - _Requirements: 5.3_

- [ ] 2. Implement core data types and validation
  - Define Order interface and OrderState type in types.ts
  - Implement validation functions for order descriptions
  - Implement validation functions for order states
  - _Requirements: 2.2, 3.2_

- [ ]\* 2.1 Write property test for whitespace validation
  - **Property 4: Whitespace-only descriptions are rejected**
  - **Validates: Requirements 2.2**

- [ ]\* 2.2 Write property test for state validation
  - **Property 6: Invalid states are rejected**
  - **Validates: Requirements 3.2**

- [ ] 3. Implement in-memory storage
  - Create OrderStore class with Map-based storage
  - Implement getAll() method
  - Implement getById() method
  - Implement create() method with UUID generation
  - Implement update() method
  - Implement delete() method
  - _Requirements: 5.1, 2.3_

- [ ]\* 3.1 Write property test for unique ID generation
  - **Property 2: Create assigns unique IDs**
  - **Validates: Requirements 2.3**

- [ ]\* 3.2 Write property test for initial state
  - **Property 3: Create initializes with "novo" state**
  - **Validates: Requirements 2.1**

- [ ]\* 3.3 Write property test for state updates
  - **Property 5: State update modifies order**
  - **Validates: Requirements 3.1**

- [ ]\* 3.4 Write property test for delete operation
  - **Property 7: Delete removes order**
  - **Validates: Requirements 4.1**

- [ ] 4. Implement Express server and routes
  - Setup Express application with JSON middleware
  - Configure CORS for frontend access
  - Implement GET /api/orders endpoint
  - Implement POST /api/orders endpoint with validation
  - Implement PATCH /api/orders/:id endpoint with validation
  - Implement DELETE /api/orders/:id endpoint
  - Add error handling middleware
  - _Requirements: 1.1, 1.2, 1.3, 2.1, 2.4, 3.1, 3.3, 3.4, 4.1, 4.2, 5.2, 5.4_

- [ ]\* 4.1 Write property test for list endpoint
  - **Property 1: List returns all stored orders**
  - **Validates: Requirements 1.1**

- [ ]\* 4.2 Write property test for error response format
  - **Property 8: Error responses are valid JSON**
  - **Validates: Requirements 5.4**

- [ ]\* 4.3 Write unit tests for HTTP endpoints
  - Test GET /api/orders returns 200 and array
  - Test POST /api/orders returns 201 with created order
  - Test POST /api/orders returns 400 for invalid input
  - Test PATCH /api/orders/:id returns 200 with updated order
  - Test PATCH /api/orders/:id returns 404 for non-existent order
  - Test DELETE /api/orders/:id returns 204 for successful deletion
  - Test DELETE /api/orders/:id returns 404 for non-existent order
  - Test CORS headers are present
  - _Requirements: 1.3, 2.4, 3.3, 3.4, 4.2, 5.2_

- [ ] 5. Create server entry point
  - Create server.ts that initializes Express app
  - Configure port (default 3000)
  - Add startup logging
  - Export app for testing
  - _Requirements: 5.3_

- [ ] 6. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
