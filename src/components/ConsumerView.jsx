// src/components/ConsumerView.jsx
import React from 'react';

function ConsumerView() {
  return (
    <section className="panel consumer-view">
      <h2>Traccia il Prodotto</h2>
      <p>Qui l'utente potrà inserire l'ID del prodotto e vedere i dettagli.</p>

      <input type="text" placeholder="Inserisci l'ID del prodotto" />
      <button>Cerca</button>

      <div className="product-details">
        {/* I risultati della ricerca appariranno qui */}
        <h3>Risultati:</h3>
        <p>Dettagli non ancora caricati.</p>
      </div>
    </section>
  );
}

export default ConsumerView;