// PaginaProdotto.jsx
import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { fetchProducts } from "../hooks/useFetch";

function PaginaProdotto() {
    const { productId } = useParams(); // id dalla URL
    const navigate = useNavigate();

    const [data, setData] = useState([]);          // tutti i prodotti
    const [currentIndex, setCurrentIndex] = useState(0); // indice del prodotto corrente
    const [isLoading, setIsLoading] = useState(true);

    // 1) Fetch di tutti i prodotti
    useEffect(() => {
        fetchProducts()
            .then(products => {
                setData(products);

                // Trovo l'indice del prodotto con id === productId iniziale
                const initialIndex = products.findIndex(
                    (product) => product.id === Number(productId)
                );

                // Se lo trovo, parto da lì; altrimenti parto da 0
                setCurrentIndex(initialIndex >= 0 ? initialIndex : 0);
                setIsLoading(false);
            });
    }, [productId]);

    // Se sto ancora caricando, mostro qualcosa
    if (isLoading) {
        return <Container className="my-3">Caricamento...</Container>;
    }

    // Se per qualche motivo non ho prodotti, gestisco il caso
    if (!data.length) {
        return <Container className="my-3">Nessun prodotto disponibile.</Container>;
    }

    const product = data[currentIndex];

    const handlePrev = () => {
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex === 0 ? data.length - 1 : prevIndex - 1;
            const newProduct = data[newIndex];
            // aggiorno anche la URL
            navigate(`/prodotto/${newProduct.id}`);
            return newIndex;
        });
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex === data.length - 1 ? 0 : prevIndex + 1;
            const newProduct = data[newIndex];
            // aggiorno anche la URL
            navigate(`/prodotto/${newProduct.id}`);
            return newIndex;
        });
    };

    const handleBackToList = () => {
        navigate("/prodotti");
    };

    return (
        <Container>
            <div className="d-flex justify-content-between my-3">
                <button
                    className="btn btn-secondary"
                    onClick={handlePrev}
                >
                    Prodotto precedente
                </button>

                <button
                    className="btn btn-secondary"
                    onClick={handleBackToList}
                >
                    Torna alla pagina prodotti
                </button>

                <button
                    className="btn btn-secondary"
                    onClick={handleNext}
                >
                    Prodotto successivo
                </button>
            </div>

            <Card className="bg-body-tertiary text-black my-3">
                <Card.Header className="d-flex align-items-center">
                    <h5 className="card-title">{product.title}</h5>
                </Card.Header>
                <img
                    src={product.image}
                    className="img-fluid product-img"
                    alt={product.title}
                />
                <Card.Body>
                    <p className="card-description">{product.description}</p>
                </Card.Body>
                <ul className="list-group list-group-flush text-center">
                    <li className="fw-bold fs-4">
                        {product.price} &euro;
                    </li>
                </ul>
            </Card>
        </Container>
    );
}

export default PaginaProdotto;