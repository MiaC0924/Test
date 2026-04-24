import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home({ categories, allBreeds }) {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();

  const matches = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    return allBreeds
      .filter((breed) => {
        const searchableFields = [
          breed.name,
          breed.description,
          breed.categoryLabel,
          ...breed.traits,
        ]
          .join(' ')
          .toLowerCase();

        return searchableFields.includes(normalizedQuery);
      })
      .slice(0, 12);
  }, [allBreeds, normalizedQuery]);

  return (
    <div className="home-layout">
      <section className="hero">
        <h1>Browse animal breeds by category</h1>
        <p>
          Explore profiles for cats, dogs, rabbits, and birds, then filter breeds by traits to
          find your ideal companion.
        </p>
      </section>

      <section className="search-panel">
        <label htmlFor="breed-search" className="label-title">
          Search across all animals
        </label>
        <input
          id="breed-search"
          type="search"
          className="search-input"
          placeholder="Try: playful, small, labrador, rabbit..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        {normalizedQuery && (
          <div className="search-results">
            <h2>Results</h2>
            {matches.length === 0 ? (
              <p>No breeds matched your search.</p>
            ) : (
              <ul>
                {matches.map((breed) => (
                  <li key={`${breed.categoryId}-${breed.id}`}>
                    <Link to={`/animals/${breed.categoryId}/${breed.id}`}>
                      <strong>{breed.name}</strong> <span>({breed.categoryLabel})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </section>

      <section>
        <h2 className="section-title">Animal categories</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <Link key={category.id} to={`/animals/${category.id}`} className="category-card">
              <img src={category.image} alt={category.label} className="category-image" />
              <div className="category-content">
                <p className="category-emoji">{category.emoji}</p>
                <h3>{category.label}</h3>
                <p>{category.description}</p>
                <span className="primary-link">View breeds</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
