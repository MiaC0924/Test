# 🐾 Pet Breeds Explorer

A React app for browsing kittens 🐱, puppies 🐶, and rabbits 🐰 — with breed photos and descriptions.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes bundled with Node.js)

## Running locally

```bash
# 1. Navigate into the pet-app directory
cd pet-app

# 2. Install dependencies (only needed the first time)
npm install

# 3. Start the development server
npm run dev
```

The dev server starts with hot module replacement (HMR). Open the URL shown in your terminal — typically **http://localhost:5173** — in your browser.

## Other commands

| Command | Description |
|---|---|
| `npm run dev` | Start the development server at `http://localhost:5173` |
| `npm run build` | Build the app for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on all source files |

## Project structure

```
pet-app/
├── public/               # Static assets (kittens.json, rabbits.json)
├── src/
│   ├── data/
│   │   └── animals.js    # All breed data (kittens, puppies, rabbits)
│   ├── pages/
│   │   ├── Home.jsx      # Homepage with animal selection cards
│   │   └── AnimalDetail.jsx  # Breed grid detail page
│   ├── App.jsx           # Root component with navigation state
│   ├── App.css           # Component styles
│   └── main.jsx          # App entry point
└── package.json
```

## Data sources

Breed images are served directly from [Wikimedia Commons](https://commons.wikimedia.org/). No API key is required. If an image fails to load, it is hidden automatically.
