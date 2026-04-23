export default function AnimalDetail({ animal, onBack }) {
  return (
    <div className="detail">
      <div className="detail-header" style={{ '--accent': animal.color }}>
        <button className="back-btn" onClick={onBack}>← Back</button>
        <span className="detail-emoji">{animal.emoji}</span>
        <h2 className="detail-title">{animal.label}</h2>
      </div>
      <div className="breed-grid">
        {animal.breeds.map((breed) => (
          <div key={breed.name} className="breed-card">
            <div className="breed-img-wrap">
              <img
                src={breed.image}
                alt={breed.name}
                className="breed-img"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="breed-info">
              <h3 className="breed-name">{breed.name}</h3>
              <p className="breed-desc">{breed.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
