import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './home';
import AllProducts from './allProducts';
import Product from './product';



function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/allProducts' exact component={AllProducts} />
        <Route path='/product' exact component={Product} />
      </Switch>

      <Footer />


    </div>
  );
}

export default App;
