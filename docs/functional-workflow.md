# Functional Workflow

## Purpose

This document defines the main user workflow and business rules of Guild Wars Armor Planner V1.

The application follows three main stages:

```text
Armor → Requirements → Acquisition
```

## Armor Selection

The user selects an armor through the following steps:

```text
Profession
    ↓
Campaign
    ↓
Armor
```

Eye of the North is treated as a campaign within the application.

After selecting a profession, the user chooses a campaign and browses the corresponding armor sets.

Selecting an armor displays:

- the armor name;
- male and female previews;
- the acquisition location;
- the required gold;
- the required common materials;
- the required rare materials.

## Requirements

The armor requirements are displayed immediately after selecting an armor.

The user can select **Check my materials** to compare these requirements with their current inventory.

For each required material, the user can enter the quantity they own.

The application calculates the missing quantity:

```text
Missing = Required - Owned
```

The missing quantity cannot be lower than zero.

## Crafting Requirements

When a missing rare material can be crafted, the application uses its crafting recipe to calculate the resources required to obtain the missing quantity.

Crafting requirements can introduce additional common materials that were not directly required by the armor.

The user must also be able to enter the quantity they already own for these additional materials.

## Actual Material Needs

The application combines all requirements for the same common material before applying the user's inventory.

```text
Direct armor requirements
+
Crafting requirements
=
Total material requirements

Total material requirements
-
Owned materials
=
Actual missing materials
```

A material owned by the user must only be deducted once from its total requirement.

This prevents the same inventory quantity from being counted separately toward direct armor requirements and crafting requirements.

The final calculation answers the main planning question:

> What should I actually keep while playing Melandru's Accord to eventually craft this armor?

## Acquisition

For each missing material, the application displays the relevant acquisition methods.

Possible methods include:

- salvage;
- material trader;
- artisan.

Material traders remain visible but are identified as unavailable in Melandru's Accord.

A Guild Wars Wiki link provides access to detailed information about each material.

## Navigation

The user can navigate backward through the current selection:

```text
Profession → Campaign → Armor
```

The breadcrumb allows the user to return directly to a previous step.

Changing an earlier selection resets all dependent selections and inventory data.

Examples:

```text
Change campaign
→ reset armor
→ reset inventory

Change profession
→ reset campaign
→ reset armor
→ reset inventory
```
