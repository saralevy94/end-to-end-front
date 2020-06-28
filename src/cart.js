import React from "react"

class Cart extends React.Component {
    render() {
        return <div >
            <img src="https://webstockreview.net/images/shopping-cart-icon-png-1.png" alt="cartImg" className="cartImg" />

            <div className="numOfItems">@</div>


            <div className="cartValue">
                <h3>cart</h3>
                <br />
                <button>payment</button>
            </div>

        </div>


    }
}
export default Cart

