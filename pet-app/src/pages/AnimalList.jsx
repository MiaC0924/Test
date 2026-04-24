import { Link, useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';

function summarize(text) {
  const firstSentence = text.split('. ')[0];
  return firstSentence.endsWith('.') ? firstSentence : `${firstSentence}.`;
}

export default function AnimalList({ getCategoryById }) {
  const { categoryId } = useParams();
  const [traitFilter, setTraitFilter] = useState('all');
  const category = getCategoryById(categoryId);

  const traitOptions = useMemo(() => {
    if (!category) {
      return [];
    }

    return Array.from(new Set(category.breeds.flatMap((breed) => breed.traits))).sort();
  }, [category]);

  const filteredBreeds = useMemo(() => {
    if (!category) {
      return [];
    }

    if (traitFilter === 'all') {
      return category.breeds;
    }

    return category.breeds.filter((breed) => breed.traits.includes(traitFilter));
  }, [category, traitFilter]);

  if (!category) {
    return (
      <section className="empty-state">
        <h2>Category not found</h2>
        <p>Choose a valid category from the navigation bar.</p>
        <Link to="/" className="primary-link">
          Back to home
        </Link>
      </section>
    );
  }

  return (
    <section className="list-layout">
      <div className="list-header">
        <h1>
          {category.emoji} {category.label} breeds
        </h1>
        <p>{category.description}</p>
      </div>

      <div className="filters-row">
        <label htmlFor="trait-filter">Filter by trait</label>
        <select
          id="trait-filter"
          value={traitFilter}
          onChange={(event) => setTraitFilter(event.target.value)}
        >
          <option value="all">All traits</option>
          {traitOptions.map((trait) => (
            <option key={trait} value={trait}>
              {trait}
            </option>
          ))}
        </select>
      </div>

      <div className="breed-grid">
        {filteredBreeds.map((breed) => (
          <article key={breed.id} className="breed-card">
            <img src={breed.image} alt={breed.name} className="breed-image" />
            <div className="breed-content">
              <h2>{breed.name}</h2>
              <p>{summarize(breed.description)}</p>
              <ul className="trait-list">
                {breed.traits.slice(0, 4).map((trait) => (
                  <li key={trait}>{trait}</li>
                ))}
              </ul>
              <Link to={`/animals/${category.id}/${breed.id}`} className="primary-link">
                View profile
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
