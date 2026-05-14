import { useEffect, useState } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import { data, useNavigate, useParams } from "react-router";
import { fetchProduct, fetchProducts } from "../hooks/useFetch";

function PaginaProdotto() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [actualProduct, setActualProduct] = useState(Number(productId));
    const [data, setData] = useState(0);

    useEffect(() => {
        fetchProducts()
            .then(data => {
                setData(data)
            })
    },[])

    useEffect(() => {
        fetchProduct(actualProduct)
            .then(data => {
                setProduct(data)
            })
    }, [actualProduct]);

    return (
        <Container>
            <div className="d-flex justify-content-between my-3">
                <button
                    className="btn btn-secondary"
                    onClick={() => navigate(setActualProduct(actualProduct - 1))}>
                    Prodotto precedente
                </button>
                <button 
                className="btn btn-secondary" 
                onClick={() => navigate("/prodotti")}>
                    torna alla pagina prodotti
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => navigate(setActualProduct(actualProduct + 1))}>
                    Prodotto successivo
                </button>
            </div>
            <Card className="bg-body-tertiary text-black my-3" >
                <Card.Header className="d-flex align-items-center">
                    <h5 className="card-title">{product.title}</h5>
                </Card.Header>
                <img src={product.image} className="img-fluid product-img" alt={product.name} />
                <Card.Body>
                    <p className="card-description">{product.description}</p>
                </Card.Body>
                <ul className="list-group list-group-flush text-center">
                    <li className="fw-bold fs-4"> {product.price} &euro; </li>
                </ul>
            </Card>
        </Container>
    )
}
export default PaginaProdotto;


