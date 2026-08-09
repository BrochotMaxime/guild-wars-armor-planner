# Architecture

## Purpose

This document defines the main architectural principles of Guild Wars Armor Planner.

The architecture should remain simple, readable, and appropriate for the scope of the V1.

## Architecture Principles

### Single Responsibility

Each part of the application should have one clear responsibility:

- components handle the user interface;
- utility functions handle business logic;
- data files contain static Guild Wars data.

### Simplicity

Avoid unnecessary abstractions, dependencies, and architectural complexity.

New patterns or tools should only be introduced when they solve a concrete problem.

### Separation of Concerns

The application separates its main responsibilities:

```text
data/
→ static Guild Wars data

utils/
→ business logic and calculations

components/
→ user interface

App.jsx
→ application workflow and shared state
```

### Scalability

New professions, campaigns, armor sets, materials, or crafting recipes should primarily be added through data rather than specific application logic.

## Technology Stack

The V1 uses:

- React
- Vite
- JavaScript
- SCSS
- ESLint
- Prettier

The V1 does not require a backend, API, database, authentication, or external state management library.

## Source Structure

The initial source structure will follow this organization:

```text
src/
├── assets/
├── components/
├── data/
├── utils/
├── styles/
├── App.jsx
└── main.jsx
```

The structure may evolve during development when a change provides a clear improvement.

## Data and Business Logic

Guild Wars data is stored locally and kept separate from the user interface.

Business logic is handled through reusable utility functions, such as:

```text
calculateMissingMaterials()
calculateCraftingRequirements()
aggregateMaterials()
```

Calculations should remain generic and data-driven rather than containing armor-specific or material-specific conditions.

## State Management

Shared application state remains in `App.jsx` for the V1.

Components receive data through props and communicate changes through callbacks.

No additional state management library is required unless the application's complexity justifies it.

## External Resources

Guild Wars Armor Planner complements rather than replaces the Guild Wars Wiki.

The application focuses on:

```text
What do I need?
What am I missing?
What should I keep?
```

The Guild Wars Wiki remains the reference for detailed acquisition methods and additional game information.
