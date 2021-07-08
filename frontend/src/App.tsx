import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Play from './pages/Play';
import Heroes from './pages/Heroes';
import Cards from './pages/Cards';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
})

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/play' exact component={Play} />
        <Route path='/heroes' exact component={Heroes} />
        <Route path='/cards' exact component={Cards} />
      </Switch>
    </Router>
    </ApolloProvider>
    
  );
}

export default App;
