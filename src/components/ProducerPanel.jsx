// File: src/components/ProducerPanel.jsx

import React from 'react';
import useProducer from './ProducerLogic';

function ProducerPanel() {
    const { 
        productId, 
        setProductId, 
        originDetails, 
        setOriginDetails, 
        loading,
        error,
        txHash,
        handleRegistration 
    } = useProducer();

    return (
        <section className="panel producer-panel">
            <h2>Registra un Nuovo Capo (Blockchain)</h2>
            <form onSubmit={handleRegistration}>
                <label htmlFor="productId">ID Prodotto:</label>
                <input
                    type="text"
                    id="productId"
                    name="productId"
                    // 🟢 SICUREZZA: Controlla che il valore non sia undefined
                    value={productId || ''} 
                    onChange={(e) => setProductId(e.target.value)}
                    placeholder="Es: FELPA-001"
                    required
                />

                <label htmlFor="details">Dettagli della Produzione/Origine:</label>
                <textarea
                    id="details"
                    name="details"
                    rows="4"
                    // 🟢 SICUREZZA: Controlla che il valore non sia undefined
                    value={originDetails || ''} 
                    onChange={(e) => setOriginDetails(e.target.value)}
                    placeholder="Luogo, Data, Tessuti specifici usati..."
                    required
                />
                
                <button type="submit" disabled={loading}>
                    {loading ? 'Registrazione in corso...' : 'Registra su Blockchain'}
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>❌ Errore: {error}</p>}
            {txHash && (
                <p style={{ color: 'green' }}>✅ Transazione inviata. Hash: 
                    <a href={`http://localhost:8545/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
                        {txHash.substring(0, 15)}...
                    </a>
                </p>
            )}
        </section>
    );
}

export default ProducerPanel;