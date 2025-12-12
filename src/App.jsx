import './App.css'; 
import { useState } from 'react'; 
import ProducerPanel from './components/ProducerPanel'; 
import ConsumerView from './components/ConsumerView';   
import BrandView from './components/BrandView';   
import CertifierView from './components/CertifierView';
import FactoryView from './components/FactoryView';


function App() {
  // Lo stato serve per tenere traccia di quale pannello stiamo mostrando: 
  const [currentView, setCurrentView] = useState('producer');

  return (
    <div class="container">
      <header class="header">
        <h1>Passaporto Digitale del Made In Italy sostenibile</h1>
      </header>
      
      {/* Menu di navigazione tra le viste */}
      <nav class="navigation">
        <button
          class={currentView === 'producer' ? 'active' : ''}
          onClick={() => setCurrentView('producer')}
        >
          Produttore: Registra Prodotto
        </button>
        <button
          class={currentView === 'consumer' ? 'active' : ''}
          onClick={() => setCurrentView('consumer')}
        >
          Consumatore: Traccia Prodotto
        </button>
        <button
          class={currentView === 'brand' ? 'active' : ''}
          onClick={() => setCurrentView('brand')}
        >
          Brand: Registra Articolo
        </button>

        <button
          class={currentView === 'certifier' ? 'active' : ''}
          onClick={() => setCurrentView('certifier')}
        >
          Ente Certificante: Convalida Certificazioni
        </button>
        <button
          class={currentView === 'factory' ? 'active' : ''}
          onClick={() => setCurrentView('factory')}
        >
          Fabbrica: Gestione Produzione
        </button>
      </nav>

      {/* Rendering condizionale del componente basato sullo stato */}
      <main class="content">
        {currentView === 'producer' && <ProducerPanel />}
        {currentView === 'consumer' && <ConsumerView />}
        {currentView === 'brand' && <BrandView />}
        {currentView === 'certifier' && <CertifierView />}
        {currentView === 'factory' && <FactoryView />}
      </main>
      
    </div>
  );
}

export default App; //ciao