import React from "react"
import Logo from './logo';
import Cart from './cart';
import Menu from './menu';
import { Link } from 'react-router-dom';



class Header extends React.Component {
    render() {
        return <header>

            <Link to='/'><Logo /> </Link>

            <Cart />
            <Menu />
        </header>

    }
}
export default Header