import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';

import { ApolloClient, createNetworkInterface, ApolloProvider} from 'react-apollo';
// Using Apollo to get Pokemon Detail via v1 api

const pokeApiClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://pokeapi-graphiql.herokuapp.com'
  })
});

render(<AppContainer><ApolloProvider client={pokeApiClient}><App/></ApolloProvider></AppContainer>, 
  document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./app.jsx', () => {
    const App = require('./app.jsx').default;
    render(
      <AppContainer>
        <ApolloProvider client={pokeApiClient}>
          <App/>
        </ApolloProvider>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
