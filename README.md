# Node.js TypeScript RESTful API

This is a simple Node.js RESTful API project written in TypeScript.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node.js package manager)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/rest-api.git
   Navigate to the project directory:
   cd rest-api
   Install dependencies:
   npm install
   Build the TypeScript code:
   npx tsc
  Start the server:
  node dist/index.js
  The API should be running at http://localhost:3000.
  API Endpoints
  GET /api/products: Retrieve a list of products
  GET /api/products/:id: Retrieve details of a specific product by ID
  POST /api/products: Create new products
  PUT /api/products/:id: Update details of a specific product by ID
  DELETE /api/products/:id: Delete a product by ID
  Middleware
  The project includes a middleware function that logs the timestamp, HTTP method, and requested URL for every incoming request to the API.
  Unit Tests
  Unit tests are included for at least two API endpoints. You can run the tests using:
  npm test





   
