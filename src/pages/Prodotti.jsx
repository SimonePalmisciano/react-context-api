import { useEffect, useState } from "react"
import Card from "./PaginaProdotto"
import { Link } from "react-router"
import { fetchProducts } from "../hooks/useFetch"

const API_URL = "https://fakestoreapi.com/products"

function Prodotti() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
            .then(data => {
                setProducts(data)
            })
    }, []);

    return (
        <div className="container my-5">
            <div className="row row-gap-3">
                {products.map(product => {
                    const {
                        id,
                        title,
                        price,
                        description,
                        image
                    } = product;
                    return (
                        <div key={id} className="col-sm-12 col-md-6 col-lg-4">
                            <Link className="text-decoration-none" to={`/prodotto/${id}`} >
                                <div className="card bg-body-tertiary text-black">
                                    <div className="card-header d-flex align-items-center">
                                        <h5 className="card-title">{title}</h5>
                                    </div>
                                    <img src={image} className="img-fluid product-img" alt={name} />
                                    <hr />
                                    <div className="card-body">
                                        <p className="card-description">{description}</p>
                                    </div>
                                    <ul className="list-group list-group-flush text-center">
                                        <li className="fw-bold fs-4"> {price} &euro; </li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Prodotti