// src/components/ProducerPanel.jsx
import React, { useState } from 'react'; // 🔑 Importiamo useState

function ProducerPanel() {
  // 1. Definiamo lo stato per i dati del modulo
  const [productData, setProductData] = useState({
    id: '',
    details: '',
  });

  // 2. Funzione per gestire i cambiamenti nei campi del modulo
  const handleChange = (e) => {
    // Aggiorna lo stato, mantenendo i dati vecchi (spread operator ...)
    setProductData({
      ...productData,
      [e.target.name]: e.target.value, // Aggiorna solo il campo modificato
    });
  };

  // 3. Funzione per gestire l'invio del modulo
  const handleSubmit = (e) => {
    e.preventDefault(); // Impedisce il ricaricamento della pagina
    
    // PER ORA: Stampa i dati nella console
    console.log("Dati da registrare:", productData);

    // TODO: Qui, in un passo successivo, avverrà la scrittura sulla blockchain simulata!
    alert(`Prodotto ${productData.id} pronto per la registrazione! Controlla la console.`);

    // Pulisce il modulo dopo l'invio
    setProductData({ id: '', details: '' });
  };

  return (
    <section className="panel producer-panel">
      <h2>Registra un Nuovo Capo</h2>
      
      {/* 4. Colleghiamo il form alla funzione handleSubmit */}
      <form onSubmit={handleSubmit}>
        
        {/* 5. Colleghiamo l'input all'ID nello stato */}
        <label htmlFor="productId">ID Prodotto:</label>
        <input 
          type="text" 
          id="productId"
          name="id" // Nome che corrisponde alla chiave nello stato (productData.id)
          placeholder="Es: IT-SHIRT-001" 
          value={productData.id} // 🔑 Mostra il valore dello stato
          onChange={handleChange} // 🔑 Aggiorna lo stato ad ogni digitazione
          required
        />

        {/* 6. Colleghiamo l'area di testo ai dettagli nello stato */}
        <label htmlFor="productDetails">Dettagli Produzione:</label>
        <textarea 
          id="productDetails"
          name="details" // Nome che corrisponde alla chiave nello stato (productData.details)
          placeholder="Luogo, Data, Tessuti..."
          value={productData.details} // 🔑 Mostra il valore dello stato
          onChange={handleChange} // 🔑 Aggiorna lo stato ad ogni digitazione
          required
        ></textarea>
        
        <button type="submit">Registra su Blockchain (Simulata)</button>
      </form>

    </section>
  );
}

export default ProducerPanel;