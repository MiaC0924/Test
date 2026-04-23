export default function Home({ animals, onSelect }) {
  return (
    <div className="home">
      <p className="home-subtitle">Discover your perfect furry companion</p>
      <div className="animal-cards">
        {animals.map((animal) => (
          <button
            key={animal.id}
            className="animal-card"
            style={{ '--accent': animal.color }}
            onClick={() => onSelect(animal)}
          >
            <span className="animal-emoji">{animal.emoji}</span>
            <span className="animal-label">{animal.label}</span>
            <span className="animal-cta">View breeds →</span>
          </button>
        ))}
      </div>
    </div>
  );
}
