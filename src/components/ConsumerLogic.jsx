// ConsumerLogic.jsx serve a definire la comunicazione per tra i dati registrati nella blockchain e l'interfaccia


import React, { useState } from 'react';

import { contract } from '../utils/web3-instance'; // Assumo che 'contract' sia l'istanza Web3

const useConsumerLogic = () => { // Non è necessario passare 'contract' come argomento se lo importi
    const [productID, setProductID] = useState('');
    const [passportDetails, setPassportDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Funzione per la ricerca: questa interagirà con la blockchain
    const handleSearch = async () => {
        // 1. Verifica l'input
        if (!productID.trim()) {
            setError("Inserisci l'ID del prodotto.");
            return;
        }

        setLoading(true);
        setError(null);
        setPassportDetails(null);

        try {
            // 2. CHIAMA LA FUNZIONE DI LETTURA DEL CONTRATTO
            // ⚠️ Questa è la riga che stavi cercando di inserire!
            const result = await contract.methods.getPassport(productID).call(); 

            // 3. Verifica i Dettagli e imposta lo stato
            setPassportDetails(result); 
            
        } catch (err) {
            console.error("Errore durante la ricerca:", err);
            // Gestione di un errore tipico del contratto
            const errorMessage = err.message.includes("Prodotto non trovato") 
                             ? "Prodotto non trovato con l'ID fornito." 
                             : "Errore durante la connessione o l'esecuzione del contratto.";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return {
        productID, setProductID,
        passportDetails,
        loading, error,
        handleSearch
    };
};

export default useConsumerLogic;