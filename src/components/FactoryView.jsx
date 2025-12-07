// src/components/FactoryView.jsx
import React from 'react';

function FactoryView() {
  return (
    <section className="panel factory-view">
      <h2>Dati dello Stabilimento e della Produzione</h2>
      <p>Questa sezione è per tracciare le informazioni specifiche sul luogo di produzione, le macchine utilizzate e le condizioni di lavoro.</p>
      
      {/* Qui potrai aggiungere i campi per l'indirizzo della fabbrica, numero di dipendenti, ecc. */}
      
      <form>
        <label>Indirizzo Stabilimento:</label>
        <input type="text" placeholder="Via Roma, 1 - 20100 Milano" />
        
        <label>Consumo Energetico Stimato (per capo):</label>
        <input type="number" placeholder="kWh" />
        
        <button type="submit">Salva Dati Stabilimento</button>
      </form>
    </section>
  );
}

export default FactoryView;