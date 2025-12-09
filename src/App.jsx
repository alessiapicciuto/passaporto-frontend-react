import './App.css'; 
import { useState } from 'react'; 
import ProducerPanel from './components/ProducerPanel'; 
import ConsumerView from './components/ConsumerView';   
import BrandView from './components/BrandView';   
import CertifierView from './components/CertifierView';
import FactoryView from './components/FactoryView';


function App() {
  // Lo stato serve per tenere traccia di quale pannello stiamo mostrando: 'producer' o 'consumer'
  const [currentView, setCurrentView] = useState('producer');

  return (
    <div className="container">
      <header className="header">
        <h1>Passaporto Digitale del Made In Italy sostenibile</h1>
      </header>
      
      {/* Menu di navigazione tra le viste */}
      <nav className="navigation">
        <button
          className={currentView === 'producer' ? 'active' : ''}
          onClick={() => setCurrentView('producer')}
        >
          Produttore: Registra Prodotto
        </button>
        <button
          className={currentView === 'consumer' ? 'active' : ''}
          onClick={() => setCurrentView('consumer')}
        >
          Consumatore: Traccia Prodotto
        </button>
        <button
          className={currentView === 'brand' ? 'active' : ''}
          onClick={() => setCurrentView('brand')}
        >
          Brand: Registra Articolo
        </button>

        <button
          className={currentView === 'ente certificante' ? 'active' : ''}
          onClick={() => setCurrentView('ente certificante')}
        >
          Ente Certificante: Convalida Certificazioni
        </button>
        <button
          className={currentView === 'factory' ? 'active' : ''}
          onClick={() => setCurrentView('factory')}
        >
          Fabbrica: Gestione Produzione
        </button>
      </nav>

      {/* Rendering condizionale del componente basato sullo stato */}
      <main className="content">
        {currentView === 'producer' && <ProducerPanel />}
        {currentView === 'consumer' && <ConsumerView />}
        {currentView === 'brand' && <BrandView />}
        {currentView === 'ente certificante' && <CertifierView />}
        {currentView === 'fabbrica' && <FactoryView />}
      </main>
      
    </div>
  );
}

export default App; //ciao