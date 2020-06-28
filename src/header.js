import React from "react"
import Logo from './logo';
import Cart from './cart';
import Menu from './menu';
// import AddProduct from './addProduct';
import { Link } from 'react-router-dom';



class Header extends React.Component {
    render() {
        return <header>
            <div>
                <Link to='/'><Logo /></Link>
                <Cart />
            </div>
            <form>
                <section>
                    <input type="text" placeholder="Search for a product or brand" className="searchBox" />
                     <button type="submit" > <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiUsX3ur8q6zSWAVhpi5WzsCCz0dtSo5RRtULA1X-iCzdqvazM&usqp=CAU" className="searchButton" alt="iconSearch" />
                     </button>
                </section>
            </form>
            <div>
                <Menu />
                <div className="flexDiv">

                <Link to='/addProduct'><div className="addProductDiv">+</div>

                </Link>
                <Link to='/adit'><div className="aditProductDiv">Adit</div>

                </Link>
                </div>

            </div>
        </header >


    }
}
export default Header