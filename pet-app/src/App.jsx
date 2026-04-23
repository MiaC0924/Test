import { NavLink, Route, Routes } from 'react-router-dom';
import {
  ANIMAL_CATEGORIES,
  getAllBreedEntries,
  getCategoryById,
} from './data/animals';
import Home from './pages/Home';
import AnimalList from './pages/AnimalList';
import AnimalDetail from './pages/AnimalDetail';
import './App.css';

function NotFoundPage() {
  return (
    <section className="empty-state">
      <h2>Page not found</h2>
      <p>Try browsing from the home page or choosing a category from the navigation.</p>
      <NavLink to="/" className="primary-link">
        Go Home
      </NavLink>
    </section>
  );
}

export default function App() {
  const allBreeds = getAllBreedEntries();

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <NavLink to="/" className="brand-link">
            🌿 Animal Explorer
          </NavLink>
          <nav className="site-nav" aria-label="Primary">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            {ANIMAL_CATEGORIES.map((category) => (
              <NavLink
                key={category.id}
                to={`/animals/${category.id}`}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {category.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Routes>
          <Route
            path="/"
            element={<Home categories={ANIMAL_CATEGORIES} allBreeds={allBreeds} />}
          />
          <Route
            path="/animals/:categoryId"
            element={<AnimalList getCategoryById={getCategoryById} />}
          />
          <Route path="/animals/:categoryId/:breedId" element={<AnimalDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}
