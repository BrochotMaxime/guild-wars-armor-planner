# Data Model

## Purpose

This document defines the initial data model of Guild Wars Armor Planner.

The V1 uses local static data without a backend or database.

## Profession

Represents a playable profession.

- `id` — unique identifier
- `name` — profession name

## Campaign

Represents a campaign available in the application.

Eye of the North is treated as a campaign within the application workflow.

- `id` — unique identifier
- `name` — campaign name

## Armor

Represents an armor set associated with a profession and campaign.

- `id` — unique identifier
- `name` — armor name
- `professionId` — associated profession
- `campaignId` — associated campaign
- `location` — acquisition location
- `images` — male and female previews
- `cost.gold` — required gold
- `cost.materials` — required materials and quantities

## Material

Represents a common or rare crafting material.

- `id` — unique identifier
- `name` — material name
- `type` — `common` or `rare`
- `wikiUrl` — Guild Wars Wiki reference
- `acquisitionMethodIds` — available acquisition methods

## CraftingRecipe

Represents the requirements for crafting a material.

- `id` — unique identifier
- `outputMaterialId` — material produced
- `outputQuantity` — quantity produced
- `ingredients` — required materials and quantities
- `gold` — crafting cost

## AcquisitionMethod

Represents a way of obtaining a material.

- `id` — unique identifier
- `name` — acquisition method name
- `availableInMelandrusAccord` — availability in Melandru's Accord

## Relationships

The main relationships between the models are:

```text
Profession ─────┐
                ├── Armor ──→ Materials
Campaign ───────┘                │
                                 ├──→ Acquisition Methods
                                 │
                                 └──→ Crafting Recipe
                                          │
                                          └──→ Ingredient Materials
```

An armor belongs to one profession and one campaign.

An armor requires one or more materials.

A material can have one or more acquisition methods.

A material may have a crafting recipe.

A crafting recipe produces a material from one or more ingredient materials.

## Material Types

Materials are divided into two categories:

- `common` — common crafting materials;
- `rare` — rare crafting materials.

Rare materials may have a crafting recipe requiring common materials.

This distinction allows the application to calculate the actual materials needed when missing rare materials must be crafted.

## Crafting Logic

Crafting recipes reference materials through their identifiers.

A recipe defines:

- the material produced;
- the quantity produced;
- the materials and quantities required;
- the gold cost.

This structure keeps crafting calculations data-driven and avoids material-specific logic in the application.
