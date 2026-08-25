"use client";

type Props = { year: number; threshold: string; onYearChange: (year: number) => void; onThresholdChange: (value: string) => void };

export function FilterBar({ year, threshold, onYearChange, onThresholdChange }: Props) {
  return <section className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
    <div><p className="font-semibold">Sales overview</p><p className="text-sm text-slate-500">Explore monthly performance by year.</p></div>
    <div className="flex flex-wrap gap-2"><select aria-label="Select year" value={year} onChange={(event) => onYearChange(Number(event.target.value))} className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500"><option value={2024}>2024</option><option value={2023}>2023</option><option value={2022}>2022</option></select><input aria-label="Sales threshold" value={threshold} onChange={(event) => onThresholdChange(event.target.value)} type="number" min="0" placeholder="Sales threshold" className="w-36 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500" /></div>
  </section>;
}
