import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React, { ReactNode } from 'react';

const client = new ApolloClient({
  uri: 'http://localhost:3000',
  cache: new InMemoryCache(),
});

interface ApolloClientProviderProps {
  children: ReactNode;
}

const ApolloClientProvider: React.FC<ApolloClientProviderProps> = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export default ApolloClientProvider;
