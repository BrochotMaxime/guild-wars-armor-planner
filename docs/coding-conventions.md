# Coding Conventions

## Purpose

These conventions define the initial coding standards for Guild Wars Armor Planner.

The goal is to keep the codebase readable, consistent, and maintainable without introducing unnecessary complexity.

These conventions may evolve as the project grows.

## General Principles

- Prefer readability over clever code.
- Keep each component or function focused on a clear responsibility.
- Use explicit and meaningful names.
- Avoid unnecessary abstractions.
- Use Prettier for formatting.
- Use ESLint for code quality.

## File Naming

### React Components

Use PascalCase for React component files.

### JavaScript Files

Use camelCase for non-component JavaScript files.

### Styles

Use lowercase file names for style files.

## React Components

- Use PascalCase for component names.
- Keep components focused on a single responsibility.
- Split components when they become difficult to read or manage.
- Prefer props for data flow between components.
- Avoid introducing global state management unless it becomes necessary.

## Functions and Variables

Use camelCase for functions and variables.

Use UPPER_SNAKE_CASE for fixed constants when appropriate.

## Data

Static Guild Wars data should remain separate from UI components.

Business logic should remain separate from data and components.

## Formatting and Quality

Before completing an issue, run:

```bash
npm run lint
npx prettier . --check
```

Formatting changes should be handled by Prettier rather than manually enforcing stylistic preferences.
