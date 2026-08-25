# Sales Insight Dashboard

A simple, responsive retail sales dashboard built as an internship portfolio project. It uses the atomic design principle: small reusable **atoms** build **molecules**, which are combined into dashboard **organisms**.

## Features

- Dashboard route at `/dashboard`
- Revenue data for 2022, 2023, and 2024
- Year selector and a custom sales-threshold filter
- Bar, line, and pie chart controls using Recharts
- Responsive Tailwind CSS interface and reusable TypeScript components

## Data source

The displayed values are local mock data designed for a focused front-end demo. Their structure and 2022–2024 date range were inspired by Kaggle's [FMCG Daily Sales Data (2022–2024)](https://www.kaggle.com/datasets/beatafaron/fmcg-daily-sales-data-to-2022-2024), a CC0 synthetic dataset with daily retail, discount, and e-commerce sales records. No Kaggle file is bundled in this repository.

## Tech stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Recharts
- Lucide React icons

## Run locally

1. Install Node.js 20.9 or newer.
2. Install the project packages:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Visit [http://localhost:3000/dashboard](http://localhost:3000/dashboard).

## Project structure

```
app/                  # Routes and global styles
components/atoms/     # Small presentational pieces
components/molecules/ # Combined input controls
components/organisms/ # Dashboard and chart sections
lib/                  # Mock sales data and helpers
```

## Next improvements

- Replace `lib/sales-data.ts` with a server-side data source or API route.
- Store the selected filters in the URL for sharable dashboard views.
- Add category, region, and comparison filters after connecting a real data source.
