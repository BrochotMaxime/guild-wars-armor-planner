# Architecture Decision Records

## Purpose

Architecture Decision Records (ADRs) document important technical decisions made during the development of Guild Wars Armor Planner.

They provide context about why a decision was made and help keep the project's technical choices understandable over time.

## When to Create an ADR

An ADR should be created when a decision has a meaningful impact on the architecture or development of the project.

Examples include:

- choosing a technology or major dependency;
- defining how application data is stored;
- introducing a new architectural pattern;
- changing an important existing technical decision.

Minor implementation details do not require an ADR.

## File Naming

ADR files follow this naming convention:

```text
ADR-XXX-short-description.md
```

Examples:

```text
ADR-001-use-local-static-data.md
ADR-002-example-decision.md
```

## ADR Structure

Each ADR should use the following structure:

```markdown
# ADR-XXX — Decision Title

## Status

Proposed | Accepted | Superseded | Deprecated

## Context

Describe the problem or situation that requires a decision.

## Decision

Describe the chosen solution.

## Consequences

Describe the main positive and negative consequences of the decision.
```

## Status

An ADR can have one of the following statuses:

- **Proposed** — the decision is being considered;
- **Accepted** — the decision has been approved and is currently applied;
- **Superseded** — the decision has been replaced by another ADR;
- **Deprecated** — the decision is no longer recommended or relevant.

Accepted ADRs should not be rewritten when an architectural decision changes. A new ADR should document the new decision and supersede the previous one.
