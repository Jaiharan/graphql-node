# GraphQL Node Project

This project demonstrates how to create a GraphQL API on both the server and client sides to efficiently query data. It uses mock data to simulate a database and displays it on the client side.

## Features

- GraphQL server with Apollo Server
- GraphQL client with Apollo Client
- Mock data for pizzas and toppings
- Query and display pizza data with toppings, stock, and status

## Prerequisites

- Node.js
- npm or yarn

## Getting Started

### Server

#### Install dependencies

```bash
npm install
```

#### Start the server

```bash
npm start
```

### Client
#### Start the server

```bash
cd client
```
#### Install dependencies

```bash
npm install
```

#### Start the client

```bash
npm start
```

## Example Queries
### Get All Pizzas
```graphql
query GetPizzas {
  pizzas {
    id
    pizza
    toppings {
      id
      topping
    }
    stock
    status
  }
}
```
### Get Pizza by Name
```graphql
query GetPizzaByName($name: String!) {
  pizzas(name: $name) {
    id
    pizza
    toppings {
      id
      topping
    }
    stock
    status
  }
}

```

## Project Structure
- Server: Contains the GraphQL server setup with Apollo Server.
- Client: Contains the React application with Apollo Client for querying the server.

## Contributing
Feel free to submit issues and pull requests for new features and improvements.

## License
This project is licensed under the MIT License.
