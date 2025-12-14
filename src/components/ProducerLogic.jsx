// File: src/components/ProducerLogic.jsx

import { useState } from 'react';
// 🟢 IMPORTAZIONE CORRETTA: Usiamo le funzioni GET
import { getContract, getAccounts } from '../utils/web3-instance'; 

const useProducer = () => {
    const [productId, setProductId] = useState('');
    const [originDetails, setOriginDetails] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [txHash, setTxHash] = useState(null);

    const handleRegistration = async (e) => {
        e.preventDefault();
        setError(null);
        setTxHash(null);
        setLoading(true);
        
        // OTTENIAMO LE VARIABILI TRAMITE LE FUNZIONI GET
        const contract = getContract();
        const accounts = getAccounts(); 

        if (!contract || accounts.length === 0) {
            setError('❌ Errore: Connessione alla blockchain non pronta. Assicurati che Hardhat sia attivo.');
            setLoading(false);
            return;
        }

        try {
            // Chiamata alla funzione registerOrigin del contratto
            const result = await contract.methods.registerOrigin(
                productId, 
                originDetails
            ).send({ from: accounts[0] });

            setTxHash(result.transactionHash);
            setError(null); 
            
        } catch (err) {
            console.error("Errore durante la transazione:", err);
            setError(`❌ Errore di transazione: ${err.message || 'Verifica la console.'}`);
        }
        setLoading(false);
    };

    return {
        productId,
        setProductId,
        originDetails,
        setOriginDetails,
        loading,
        error,
        txHash,
        handleRegistration,
    };
};

export default useProducer;