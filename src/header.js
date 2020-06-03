import React from "react"
import Logo from './logo';
import Cart from './cart';
import Menu from './menu';
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
                    <label></label>
                    <input type="text" placeholder="Search for a product or brand" className="searchBox" />
                    {/* <input type="submit" value title="search" className="searchButton"/>  */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiUsX3ur8q6zSWAVhpi5WzsCCz0dtSo5RRtULA1X-iCzdqvazM&usqp=CAU" className="searchButton"/>
                    
                </section>
            </form>


            <div>
                <Menu />
            </div>
        </header >

    }
}
export default Header