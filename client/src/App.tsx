import ApolloClientProvider from "./components/ApolloClient"
import Pizzas from "./components/Pizzas"
function App() {

  return (
    <ApolloClientProvider>
      <Pizzas />
    </ApolloClientProvider>
  )
}

export default App
