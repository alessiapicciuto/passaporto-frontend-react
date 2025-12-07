import './App.css'; 
import { useState } from 'react'; 
import ProducerPanel from './components/ProducerPanel'; 
import ConsumerView from './components/ConsumerView';   

function App() {
  // Lo stato serve per tenere traccia di quale pannello stiamo mostrando: 'producer' o 'consumer'
  const [currentView, setCurrentView] = useState('producer');

  return (
    <div className="container">
      <header className="header">
        <h1>Passaporto Digitale del Made In Italy sostenibile</h1>
      </header>
      
      {/* Menu di navigazione tra le due viste */}
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
      </nav>

      {/* Rendering condizionale del componente basato sullo stato */}
      <main className="content">
        {currentView === 'producer' && <ProducerPanel />}
        {currentView === 'consumer' && <ConsumerView />}
      </main>
      
    </div>
  );
}

export default App;