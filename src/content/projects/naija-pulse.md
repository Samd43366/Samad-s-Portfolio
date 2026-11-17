---
title: Naija Pulse
summary: "A community incident map for Nigeria: people report what is happening near them without signing up, and others nearby confirm or dispute it."
status: building
stack: [Python, FastAPI, PostgreSQL, PostGIS, H3, React, Leaflet]
year: 2026
order: 1
accent: green
repo: https://github.com/Samd43366/naija-pulse
---

## What it does

Someone who sees a flood, a power failure or a security incident can report it from their phone with no registration. Other people nearby confirm or dispute the report, and the app shows how much to trust it. People can also save a home, an office or a commute route and get an alert when something happens along it. A route check before leaving shows the incidents along the way. Reports can also come in by SMS through a webhook for people on poor data connections.

It started as a university class project and I kept building on it.

## How it works

The backend is FastAPI on PostgreSQL with PostGIS. The map is a React and Leaflet app drawn over a hexagonal grid (Uber H3), so nearby reports of the same event merge into one incident, and a commute route becomes a list of hexagons that new incidents are matched against.

Reports skip login. A device gets a token stored in the browser and starts at a neutral reputation of 0.5, which rises when its reports are confirmed and falls when they are disputed.

Trust in an incident combines the history of the area with what people nearby say about it:

```
trust = (k · prior + confirm weight) / (k + confirm weight + dispute weight)
```

A vote counts for less the further the voter is from the incident. It has full weight at the spot, half at 500 m, and about 6% at 2 km. That limits how much a person far away can swing a score.

## Decisions

- **H3 for indexing, PostGIS for geometry.** H3 is cheap for grouping, deduplication and route corridors. PostGIS handles exact distances and geometry. I kept them separate and don't use one in place of the other.
- **Privacy is applied when the response is built.** A report's exact location is stored privately for deduplication. Public responses blur the location for sensitive categories such as security incidents. Photos have their location metadata stripped.
- **Demo mode is labelled.** The app can run on an in-memory store without a database. The docs say it must not pretend to be durable.

## The data

The map ships with 836 seeded incidents across all 36 states and the FCT. 36 come from real news stories. The rest are **generated for demonstration**, with coordinates placed inside the correct local government area. They are not real events, and the app has no live users. The repo includes scripts to load ACLED conflict data and NEMA flood data into the area risk scores.

## What is tested and what is not done

Eight unit tests pass: trust maths, H3 conversion, route corridors, location blurring and seed coverage. The CI workflow compiles the backend and builds the frontend.

It is not ready for real reports. The repo's roadmap lists what is left: making the in-memory and Postgres storage behave the same, and adding abuse controls before it takes real traffic. There is no live demo yet.
