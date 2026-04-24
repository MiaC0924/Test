# 🌿 Animal Explorer

A React + Vite animal browsing app with category browsing, trait filtering, and detailed breed profiles.

## Features

- Unified data model for all animals in `src/data/animals.json` with consistent breed fields:
  - `name`
  - `description`
  - `image`
  - `traits`
- Animal categories: **Cats, Dogs, Rabbits, Birds**
- Home page with:
  - category cards
  - global search across all animal types and traits
- Category list page with:
  - breed card grid (image + summary)
  - trait filter dropdown
- Breed detail page with:
  - full description
  - characteristics table
  - fun facts
- Persistent navigation bar and client-side routing via React Router
- Clean, nature-inspired theme using app-wide CSS styles

## Routes

- `/` → Home page
- `/animals/:categoryId` → Category breed list
- `/animals/:categoryId/:breedId` → Breed detail profile

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

## Running locally

```bash
cd pet-app
npm install
npm run dev
```

Typical dev URL: `http://localhost:5173`

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
pet-app/
├── src/
│   ├── data/
│   │   ├── animals.json      # Unified category + breed data
│   │   └── animals.js        # Data access helpers
│   ├── pages/
│   │   ├── Home.jsx          # Category cards + global search
│   │   ├── AnimalList.jsx    # Category grid + trait filtering
│   │   └── AnimalDetail.jsx  # Full breed profile
│   ├── App.jsx               # Shell + router + nav
│   ├── App.css               # Theme and layout styles
│   ├── index.css             # Global reset/base styles
│   └── main.jsx              # App entry with BrowserRouter
└── package.json
```
