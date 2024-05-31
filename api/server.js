const { ApolloServer, gql } = require("apollo-server");

// Fake database data
const pizzaToppings = [
  { id: 1, topping: "Cheesy" },
  { id: 2, topping: "Pepperoni" },
  { id: 3, topping: "Mushrooms" }
];

const pizzas = [
  { id: 1, pizza: "Neapolitan Pizza", toppings: [pizzaToppings[0], pizzaToppings[1]], stock: 5 },
  { id: 2, pizza: "Chicago Pizza", toppings: [pizzaToppings[1], pizzaToppings[2]], stock: 3 },
  { id: 3, pizza: "New York-Style Pizza", toppings: [pizzaToppings[0], pizzaToppings[2]], stock: 4 },
  { id: 4, pizza: "Sicilian Pizza", toppings: [pizzaToppings[2], pizzaToppings[0]], stock: 6 },
  { id: 5, pizza: "Greek Pizza", toppings: [pizzaToppings[1], pizzaToppings[0]], stock: 2 },
  { id: 6, pizza: "California Pizza", toppings: [pizzaToppings[2], pizzaToppings[1]], stock: 5 },
  { id: 7, pizza: "Detroit Pizza", toppings: [pizzaToppings[0], pizzaToppings[2]], stock: 7 },
  { id: 8, pizza: "St. Louis Pizza", toppings: [pizzaToppings[1], pizzaToppings[0]], stock: 3 }
];

const typeDefs = gql`
  enum PizzaStatus {
    AVAILABLE
    COOKING
    UNAVAILABLE
  }

  type Pizza {
    id: Int!
    pizza: String!
    toppings: [Topping!]!
    stock: Int!
    status: PizzaStatus!
  }

  type Topping {
    id: Int!
    topping: String!
  }

  type Query {
    pizzas: [Pizza]
  }
`;

const resolvers = {
  PizzaStatus: {
    AVAILABLE: 'AVAILABLE',
    COOKING: 'COOKING',
    UNAVAILABLE: 'UNAVAILABLE',
  },
  Query: {
    pizzas: () => {
      return pizzas.map(pizza => ({
        ...pizza,
        status: "AVAILABLE" // Assuming all pizzas are available for simplicity
      }));
    },
  },
};

const server = new ApolloServer({
  playground: true,
  typeDefs,
  resolvers
});

server.listen({ port: 3000 }).then(({ url }) => {
  console.log(`Server running at ${url}`);
});
