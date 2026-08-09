# ADR-001 — Use Local Static Data

## Status

Accepted

## Context

Guild Wars Armor Planner requires data about professions, campaigns, armor sets, materials, crafting recipes, and acquisition methods.

This data is relatively stable and does not require user-generated content or server-side processing in the V1.

Introducing a backend, API, or database would add complexity without providing a clear benefit for the current scope.

## Decision

The V1 will store Guild Wars data locally within the application.

Static data will be organized in dedicated files under `src/data/` and consumed directly by the application.

No backend, external API, or database will be used for application data in the V1.

## Consequences

### Positive

- simpler architecture;
- easier development and deployment;
- no backend infrastructure to maintain;
- data remains directly available to the application.

### Negative

- data updates require a new application deployment;
- the local dataset may become larger as more Guild Wars content is added.
