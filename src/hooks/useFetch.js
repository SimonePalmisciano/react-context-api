import { useState } from "react";
import { useEffect } from "react";

const API_URL = "https://fakestoreapi.com/products"

function fetchProducts() {
    return fetch(API_URL)
        .then(response => {
            if (response.status === 404) {
                throw new Error('pagina non trovata')
            } else {
                return response.json();
            }
        })
        .then(jsonData => {
            return jsonData;
        })
}

function fetchProduct(productId) {
    return fetch(`${API_URL}/${productId}`)
        .then(response => {
            if (response.status === 404) {
                throw new Error('pagina non trovata')
            } else {
                return response.json();
            }
        })
        .then(jsonData => {
            return jsonData;
        })
}

export {fetchProducts, fetchProduct}