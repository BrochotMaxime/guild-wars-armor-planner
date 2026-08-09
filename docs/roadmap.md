# Roadmap

## Purpose

This roadmap provides a high-level overview of the development of Guild Wars Armor Planner.

Detailed tasks and implementation progress are managed through GitHub Issues and Milestones.

## Milestone 1 — Project Foundation

Establish the technical and documentation foundations of the project before feature development.

Main objectives:

- initialize the React and Vite project;
- configure code quality tools;
- create the project documentation;
- define the data model;
- define the functional workflow.

## Milestone 2 — Core Application

Build the complete armor planning workflow and its main business logic.

Main objectives:

- implement profession and campaign selection;
- implement armor selection and details;
- display armor requirements;
- allow users to enter their current materials;
- calculate missing materials;
- calculate crafting requirements for rare materials;
- aggregate actual material needs;
- display acquisition methods and Guild Wars Wiki links;
- implement backward navigation.

The core user journey should follow:

```text
Profession
    ↓
Campaign
    ↓
Armor
    ↓
Requirements
    ↓
Acquisition
```

## Milestone 3 — Polish and Release

Finalize the application and prepare it for public use.

Main objectives:

- refine the UI and responsive design;
- improve accessibility;
- add SEO metadata;
- test the application;
- review Guild Wars data and documentation;
- prepare and perform production deployment;
- integrate the finished project into the portfolio.

## Future Evolution

Possible improvements beyond the V1 may include:

- inventory persistence;
- multiple armor tracking;
- character management;
- additional planning features.

These features are intentionally excluded from the current roadmap and will only be considered after the V1 is complete.
