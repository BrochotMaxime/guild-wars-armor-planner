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
- `craftingLocation.name` — location where the maximum-stat armor is crafted
- `craftingLocation.campaignId` — campaign containing the crafting location
- `pieces` — armor slots included in the set
- `prestige` — whether the armor is a prestige armor set
- `images.male` — male armor preview
- `images.female` — female armor preview
- `cost.gold` — required gold
- `cost.materials` — required materials and quantities
- `wikiUrl` — Guild Wars Wiki reference

The supported armor slots are:

- `head`
- `chest`
- `hands`
- `legs`
- `feet`

Not every armor set contains all five armor pieces. The pieces array only contains the slots that are available for the set.

Armor costs represent the total cost of all available pieces with maximum armor statistics.

The armor campaign and the crafting location campaign may differ. For example, an armor classified as a Prophecies armor may have its maximum-stat version crafted at a location in Factions.

## Material

Represents a common or rare crafting material.

- `id` — unique identifier
- `name` — material name
- `type` — `common` or `rare`
- `icon` — material icon
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

An armor belongs to one profession and is classified under one campaign.

An armor is crafted at a location associated with a campaign.

An armor contains one or more available armor pieces.

An armor requires one or more materials.

A material can have one or more acquisition methods.

A material may have a crafting recipe.

A crafting recipe produces a material from one or more ingredient materials.

An ingredient material may itself have a crafting recipe.

## Material Types

Materials are divided into two categories:

- `common` — common crafting materials;
- `rare` — rare crafting materials.

Rare materials may have crafting recipes requiring common materials, other rare materials, or both.

This distinction allows the application to group materials by type and calculate the actual material requirements when missing rare materials must be crafted.

## Crafting Logic

Crafting recipes reference materials through their identifiers.

A recipe defines:

- the material produced;
- the quantity produced;
- the materials and quantities required;
- the gold cost.

Crafting requirements are calculated recursively. When a selected recipe requires another craftable rare material, the application can also calculate the ingredients required to craft that intermediate material.

The player inventory is taken into account at each crafting level. Only the missing quantity of a material is used to calculate its crafting requirements.

This data-driven structure supports recursive crafting calculations without introducing material-specific logic into the application.
