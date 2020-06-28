import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export default function AllProducts() {
    const [products, setProduct] = useState([])
    const [limit, setLimit] = useState(5)
    const [LoadMore, setLoadMore] = useState(true)



    // localStorage.products = []
    async function fetchProducts() {
        try {
            const res = await fetch('http://localhost:1234/product'
            ).then(r => r.json())
            setProduct(res)

        } catch (error) {
            return 'error:' + error.message || error;
        }
    }

    useEffect(() => { fetchProducts() }, [])


    async function SortByName() { //סינון לפי שם
        try {
            const res = await fetch('http://localhost:1234/SortByName'
            ).then(r => r.json())
            setProduct(res)

        } catch (error) {
            return 'error:' + error.message || error;
        }
    }

    async function SortByPrice() { //סינון לפי מחיר
        try {
            const res = await fetch('http://localhost:1234/SortByPrice'
            ).then(r => r.json())
            setProduct(res)

        } catch (error) {
            return 'error:' + error.message || error;
        }
    }

    async function FilterByPrice(value) {
        try {
            const res = await fetch(`http://localhost:1234/productFilter/price/:${value}`
            ).then(r => r.json())
            setProduct(res)

        } catch (error) {
            return 'error:' + error.message || error;
        }
    }

    // function setCart(name) {
    //     localStorage.setItem("products",JSON.parse(localStorage.products)) = name
    // }

    function isLoadMore() {
        setLimit(limit + 5)
        if (limit >= products.length)
            setLoadMore(false)

    }


    return <div>
        <div onClick={() => SortByName()}>Name <img src="https://img.icons8.com/metro/26/000000/sort.png" alt="sortIcon" /></div>
        <div onClick={() => SortByPrice()}>Price <img src="https://img.icons8.com/metro/26/000000/sort.png" alt="sortIcon" /></div>
        <div class="slidecontainer">
            <label>Price range</label>
            <input onClick={FilterByPrice(50)} type="range" min="0" max="100" ></input>
        </div>
        {products.slice(0, limit).map(product =>
            <div className="productsDiv">
                <img src={product.image} alt="productImage" />
                <form >
                    {/* //onSubmit={setCart(product.name)} */}
                    <Link to={{
                        pathname: "/product",
                        search: "?name=${product}",
                        hash: `${product.name}`,
                        satate: { fromDashboard: true }
                    }}>{product.name}</Link>

                    {/* `/product/${product.name}`}> */}
                    <section>
                        <label>number:</label>
                        <input type='number' />
                    </section>
                    <h2>{product.price}$</h2>
                    <input type="submit" value="Add to cart" />

                </form>
            </div>
        )}
        <div onClick={() => isLoadMore()}>{LoadMore ? 'Load More' : ''} </div>
    </div >


}
