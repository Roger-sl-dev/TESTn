import React, { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_SECRET_KEY;

export default () => {
    const [checkoutUrl, setCheckoutUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createCheckout = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(
                "https://api.conta.skalepay.com.br/v1/checkouts",
                {
                    amount: 10000, // Valor em centavos
                    items: [{ name: "Produto Exemplo", quantity: 1, price: 10000 }],
                    paymentMethods: ["credit_card", "boleto", "pix"],
                    customer: { name: "Cliente Exemplo", email: "cliente@email.com" }
                },
                {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            setCheckoutUrl(response.data.secureUrl);
        } catch (error) {
            console.error("Erro ao criar checkout", error);
            setError("Erro ao criar checkout. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={createCheckout} disabled={loading}>
                {loading ? "Carregando..." : "Criar Checkout"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {checkoutUrl && (
                <p>
                    <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                        Acesse o checkout aqui
                    </a>
                </p>
            )}
        </div>
    );
};

