import './App.css'; 
import { useState } from 'react'; 
import ProducerPanel from './components/ProducerPanel'; 
import ConsumerView from './components/ConsumerView';   
import BrandView from './components/BrandView';   
import FactoryView from './components/FactoryView';   // ✅ nuovo import

function App() {
  const [currentView, setCurrentView] = useState('producer');

  return (
    <div className="container">
      <header className="header">
        <h1>Passaporto Digitale del Made In Italy sostenibile</h1>
      </header>

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
          className={currentView === 'factory' ? 'active' : ''}
          onClick={() => setCurrentView('factory')}
        >
          Fabbrica: Gestione Produzione
        </button>
      </nav>

      <main className="content">
        {currentView === 'producer' && <ProducerPanel />}
        {currentView === 'consumer' && <ConsumerView />}
        {currentView === 'brand' && <BrandView />}
        {currentView === 'factory' && <FactoryView />} 
      </main>
    </div>
  );
}

export default App;