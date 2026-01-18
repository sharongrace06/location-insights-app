# Location Insights App

## Overview

The Location Insights App is a lightweight, client-ready web application built with **HTML, CSS, and vanilla JavaScript**. It allows users to add geographic locations, visualize them on interactive maps, and derive simple spatial insights such as density and growth patterns.

The project was designed to demonstrate **clean frontend architecture**, **state-driven UI updates**, and **basic geospatial analysis** without relying on heavy frameworks.

---

## Background & Problem Statement

This application was originally built for a **client I work with part-time**. The team needed to create and review maps on a **monthly basis** to track locations across **multiple countries**.

Before this app existed, their data lived only in **spreadsheets**, which made it difficult to:

* Visually verify locations
* Track geographic spread across regions
* Understand growth patterns over time
* Share insights clearly with other team members

Additionally, the data being handled was **client-sensitive**, so it was important that it remained **local and secure**, without being pushed to external servers by default.

---

## Solution

The Location Insights App was designed as a **lightweight internal tool** that replaces spreadsheets with interactive maps and visual insights.

Key decisions included:

* Using **localStorage** so data remains only on the user’s device, aligning with client security expectations
* Supporting **multiple countries and regions** through flexible coordinate-based inputs
* Making the app simple enough that **other team members** can use it without technical training

The result is a tool that supports ongoing monthly tracking while remaining easy to explain, extend, and maintain.

---

## Key Features

### Location Management

* Add locations with place name, latitude, and longitude
* Persistent storage using `localStorage`
* Delete locations with instant UI updates

### Visualization

* **Main Map**: Marker-based view for verifying saved locations
* **Locations Table**: Scrollable table synced with map data

### Insights & Analysis

* **Heatmap**: Visualizes density of locations
* **Growth Path**: Shows the order in which locations were added over time
* Independent toggles to show/hide each insight

### Export

* Export Main Map as PNG
* Export Insights Map (with legends and active layers) as PNG

---

## Architecture Overview

The app follows a modular, responsibility-driven architecture:

* **app.js** — Application orchestrator (events, lifecycle, rendering coordination)
* **dataStore.js** — Single source of truth (state + localStorage persistence)
* **table.js** — Table rendering logic only
* **map.js** — Leaflet map setup and layer rendering
* **insights.js** — Pure insight computation (no DOM or Leaflet dependencies)
* **export.js** — Map export utilities using `html2canvas`

### Design Principles

* Single source of truth for data
* Centralized rendering via a single orchestration function
* Pure logic separated from UI and third-party libraries
* Predictable state-driven UI updates

---

## How It Works (High Level)

1. User adds or deletes a location
2. `dataStore` updates application state
3. `app.js` triggers a full re-render
4. Views (table, maps, insights) update based on current state

This approach avoids duplicated logic and keeps the app easy to extend.

---

## How to Run the App

### Local Usage

1. Clone or download the repository
2. Open `index.html` in a browser
3. No build steps or external dependencies required

### Shared Usage (GitHub Pages)

The app is designed to run entirely on the client side, which makes it suitable for hosting on **GitHub Pages** for shared access.

When deployed this way:

* Each user’s data remains local to their own browser
* No client data is stored on a server
* The app can be easily accessed by distributed team members

---

## What This Project Demonstrates

* Clean frontend architecture without frameworks
* Effective use of Leaflet for geospatial visualization
* Thoughtful UX decisions (legends, toggles, clarity)
* Refactoring for maintainability and scalability

---

## Possible Extensions

* Category-based markers
* Time filtering for insights
* Cloud-based persistence
* Responsive mobile-first layout

---

## Author

Built as a portfolio and freelancing case study to demonstrate frontend engineering fundamentals and client-ready thinking.

