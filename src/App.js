import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './header';
import Footer from './footer';
// import Menu from './menu';
// import Logo from './logo';
// import Cart from './cart';
import Home from './home';
import AllProducts from './allProducts';
import Product from './product';



function App() {
  return (
    <div className="App">
      <Header />
      <Footer />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/allProducts' exact component={AllProducts} />
        <Route path='/product' exact component={Product} />
      </Switch>
{/* 
      <Route path='/menu' component={Menu} />
      <Route path='/logo' exact component={Logo} />
      <Route path='/cart' exact component={Cart} /> */}


    </div>
  );
}

export default App;
