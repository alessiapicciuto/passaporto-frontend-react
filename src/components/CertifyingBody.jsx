// src/components/CertifierView.jsx
import React from 'react';

function CertifierView() {
  return (
    <section className="panel certifier-view">
      <h2>Dati dell'Ente Certificatore 🏛️</h2>
      
      {/* Qui potrai aggiungere i campi specifici per un ente di certificazione. */}
      
      <form>
        <label>Nome dell'Ente:</label>
        <input type="text" placeholder="Es: EcoCert S.p.A." />
        
        <label>Accreditamento/Standard di Riferimento:</label>
        <textarea placeholder="Es: Accredia, ISO/IEC 17065, Regolamento UE 2018/848..."></textarea>
        
        <label>Logo (URL):</label>
        <input type="url" placeholder="https://www.ente-certificatore.it/logo.png" />
        
        <button type="submit">Salva i Dati dell'Ente</button>
      </form>
    </section>
  );
}

export default CertifierView;
