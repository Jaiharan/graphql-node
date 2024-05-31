import React from 'react';
import { gql, useQuery } from '@apollo/client';

interface Topping {
  id: number;
  topping: string;
}

interface Pizza {
  id: number;
  pizza: string;
  toppings: Topping[];
  stock: number;
  status: PizzaStatus;
}


enum PizzaStatus {
  AVAILABLE
}


interface GetPizzasData {
  pizzas: Pizza[];
}

interface GetPizzasVars {
  name?: string;
}

const GET_PIZZAS = gql`
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
`;

const Pizzas: React.FC = () => {
  const { loading, error, data } = useQuery<GetPizzasData, GetPizzasVars>(GET_PIZZAS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Pizzas</h1>
      <ul>
        {data?.pizzas.map(pizza => (
          <li key={pizza.id}>
            <h2 style={{ backgroundColor: "black", borderRadius: "5px", padding: "5px" }}>{pizza.pizza}</h2>
            <ul>
              {pizza.toppings.map(topping => (
                <li key={topping.id}>{topping.topping}</li>
              ))}
            </ul>
            <p>Stock: {pizza.stock}</p>
            <p style={{ backgroundColor: "green", borderRadius: "5px", padding: "5px" }}>Status: {pizza.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizzas;
