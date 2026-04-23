import { Link, useParams } from 'react-router-dom';
import { getBreedById } from '../data/animals';

export default function AnimalDetail() {
  const { categoryId, breedId } = useParams();
  const entry = getBreedById(categoryId, breedId);

  if (!entry) {
    return (
      <section className="empty-state">
        <h2>Breed not found</h2>
        <p>The breed profile you requested does not exist.</p>
        <Link to="/" className="primary-link">
          Go home
        </Link>
      </section>
    );
  }

  const { category, breed } = entry;

  return (
    <article className="detail-layout">
      <Link to={`/animals/${category.id}`} className="back-link">
        ← Back to {category.label}
      </Link>

      <header className="detail-header">
        <img src={breed.image} alt={breed.name} className="detail-image" />
        <div>
          <p className="detail-kicker">
            {category.emoji} {category.label}
          </p>
          <h1>{breed.name}</h1>
          <p>{breed.description}</p>
        </div>
      </header>

      <section className="detail-section">
        <h2>Characteristics</h2>
        <table className="characteristics-table">
          <tbody>
            {Object.entries(breed.characteristics).map(([label, value]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="detail-section">
        <h2>Traits</h2>
        <ul className="trait-list">
          {breed.traits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
      </section>

      <section className="detail-section">
        <h2>Fun facts</h2>
        <ul className="fact-list">
          {breed.funFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
