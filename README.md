# Portfolio V1 | Blueprint OS

## 📂 System Overview

**Blueprint OS** is a highly interactive, technical portfolio designed to mimic a futuristic engineering interface. Built with precision using **Next.js 16**, it features real-time system monitoring, dynamic theming, and a "living" UI that reacts to user connectivity and time.

This project serves as the central hub for my projects, credentials, and technical tools.

---

## Core Modules (Features)

* **Dynamic Holographic HUD:**
    * Global **Theme Cycler** utilizing CSS `hue-rotate` filters to shift the OS color palette (Blue, Purple, Amber, Green) without code refactoring.
    * Real-time **System Clock** synced to the user's local time.
* **Live Network Telemetry:**
    * Reactive **Connectivity Monitor** that detects offline/online status in real-time.
    * Visual alerts and logging when the network connection is lost or restored.
* **Away Protocol:**
    * Browser tab title dynamically changes when the user switches tabs to alert of "Connection Lost."
* **Engineering Grade UI:**
    * Custom vector-based **"AK" Monogram** (Compass & Caliper design).
    * Grid-based layouts with technical borders and blueprint aesthetics.
    * Smooth scroll-spy navigation with offset calculation.

---

## Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Core** | [Next.js 16](https://nextjs.org/) | App Router Architecture |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict Type Safety |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first Design System |
| **Icons** | [Material Symbols](https://fonts.google.com/icons) | Google Material Icons |
| **State** | React Hooks | `useState`, `useEffect` for Logic |

---

## Initialization (Run Locally)

To boot up the system locally, follow these protocols:

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/portfolio-v2.git](https://github.com/your-username/portfolio-v2.git)
cd portfolio-v2
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Initiate Launch Sequence
```bash
npm run dev
```

The system will come online at `http://localhost:3000`.

---

## File Structure

```text
/root
├── app/
│   ├── components/      # UI Sections (Hero, Projects, Skills)
│   ├── context/         # Global Logic (LogContext)
│   ├── tools/           # /tools route for DevKit (WIP)
│   ├── globals.css      # Base Tailwind & Blueprint styles
│   ├── layout.tsx       # Root metadata & SEO
│   └── page.tsx         # Main OS Entry Point
├── public/              # Static Assets (CV, Images)
└── lib/                 # Data Constants (Project lists)
```

---

## Configuration

### Updating Project Data
All project data is decoupled from the UI. To update the portfolio, edit `lib/data.tsx`:

```typescript
export const projects = [
  {
    title: "PROJECT_NAME",
    status: "LIVE",
    techStack: ["Next.js", "AI"],
    // ...
  }
];
```

### Customizing the Theme
The base color is defined in `tailwind.config.ts`. The "Theme Cycler" works by rotating the hue of this base color.

Default: Electric Blue

Cycle Steps: +90deg (Purple -> Amber -> Green)

---