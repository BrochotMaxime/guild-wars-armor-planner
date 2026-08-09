# Project Vision

## Project Overview

Guild Wars Armor Planner is a lightweight web application designed to help Guild Wars players plan the acquisition of an armor set.

The application focuses on a simple workflow:

```text
Armor → Requirements → Acquisition
```

Players select a profession, choose a campaign, select an armor set, review its requirements, compare them with their current inventory, and identify the materials they still need.

The application is particularly useful for players using Melandru's Accord, where material traders are unavailable and careful resource management becomes more important.

## Problem

The Guild Wars Wiki already provides detailed information about armor costs and material requirements.

However, players still need to manually determine:

- which required materials they already own;
- which materials are still missing;
- which common materials must be kept to craft missing rare materials;
- how much additional material is required when crafting rare materials;
- which acquisition methods remain relevant when playing Melandru's Accord.

Guild Wars Armor Planner aims to simplify this planning process.

## Target Users

The primary target users are Guild Wars players who want to prepare the acquisition of an armor set.

The application is especially useful for players using Melandru's Accord, where access to material traders is restricted and materials must often be obtained through salvage or crafting.

## Main User Goal

The application should answer the following question:

> What should I actually keep while playing Melandru's Accord to eventually craft this armor?

## V1 Scope

The first version will allow users to:

- select a profession;
- select a campaign;
- browse the available armor sets;
- view male and female armor previews;
- view armor location;
- view the total gold and material requirements;
- enter the materials they currently own;
- calculate missing materials;
- calculate the common materials required to craft missing rare materials;
- aggregate direct armor requirements and crafting requirements;
- view relevant acquisition methods;
- identify acquisition methods unavailable in Melandru's Accord;
- access Guild Wars Wiki links for detailed material information;
- navigate backward through profession, campaign, and armor selection.

## Out of Scope for V1

The first version will not include:

- user accounts;
- authentication;
- backend services;
- databases;
- saved inventories;
- localStorage persistence;
- multiple armor tracking;
- character management;
- farming guides;
- detailed drop locations;
- dynamic material prices;
- build planning.

## Product Principles

The application should remain:

- simple to understand;
- simple to use;
- simple to maintain;
- focused on the armor planning workflow;
- lightweight in its technical architecture.

Features should only be introduced when they clearly improve the core user experience.
