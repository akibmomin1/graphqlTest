import React from 'react';
import { Container, Grid } from '@mui/material';
import Table from './component/Table'; 
import DataSummary from './component/DataSummary'; 
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import GraphQl from './graphQl/graphql';

function App() {
  // Define columns and fetch data using Apollo Client
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/', // Your GraphQL API URL
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <GraphQl/>
      </ApolloProvider>
  );
}

export default App;
