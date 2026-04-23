import { useState } from 'react';
import { ANIMALS } from './data/animals';
import Home from './pages/Home';
import AnimalDetail from './pages/AnimalDetail';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const [animal, setAnimal] = useState(null);

  function handleSelect(selectedAnimal) {
    setAnimal(selectedAnimal);
    setPage('detail');
  }

  function handleBack() {
    setPage('home');
    setAnimal(null);
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🐾 Pet Breeds Explorer</h1>
      </header>
      <main className="app-main">
        {page === 'home' ? (
          <Home animals={ANIMALS} onSelect={handleSelect} />
        ) : (
          <AnimalDetail animal={animal} onBack={handleBack} />
        )}
      </main>
    </div>
  );
}
