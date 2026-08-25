"use client";

import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { useState } from "react";
import { ChartTypeButton } from "@/components/atoms/chart-type-button";
import { type MonthlySale, formatCurrency } from "@/lib/sales-data";

type ChartKind = "bar" | "line" | "pie";
const colors = ["#4f46e5", "#7c3aed", "#0ea5e9", "#14b8a6", "#f59e0b", "#f43f5e"];

export function SalesChart({ data, year }: { data: MonthlySale[]; year: number }) {
  const [type, setType] = useState<ChartKind>("bar");
  const chartProps = { data, margin: { top: 12, right: 8, left: -8, bottom: 0 } };
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div><h2 className="font-semibold">Monthly sales</h2><p className="text-sm text-slate-500">Revenue performance for {year}</p></div><div className="flex rounded-xl bg-slate-100 p-1"><ChartTypeButton label="Bar" active={type === "bar"} onClick={() => setType("bar")} /><ChartTypeButton label="Line" active={type === "line"} onClick={() => setType("line")} /><ChartTypeButton label="Pie" active={type === "pie"} onClick={() => setType("pie")} /></div></div><div className="h-80"><ResponsiveContainer width="100%" height="100%">{type === "bar" ? <BarChart {...chartProps}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="month" tickLine={false} axisLine={false} /><YAxis tickFormatter={(value) => `$${value / 1000}k`} tickLine={false} axisLine={false} /><Tooltip formatter={(value: number) => formatCurrency(value)} /><Bar dataKey="sales" fill="#4f46e5" radius={[6,6,0,0]} /></BarChart> : type === "line" ? <LineChart {...chartProps}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="month" tickLine={false} axisLine={false} /><YAxis tickFormatter={(value) => `$${value / 1000}k`} tickLine={false} axisLine={false} /><Tooltip formatter={(value: number) => formatCurrency(value)} /><Line type="monotone" dataKey="sales" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4 }} /></LineChart> : <PieChart><Pie data={data} dataKey="sales" nameKey="month" cx="50%" cy="50%" outerRadius={105} label={({ month }) => month}>{data.map((entry, index) => <Cell key={entry.month} fill={colors[index % colors.length]} />)}</Pie><Tooltip formatter={(value: number) => formatCurrency(value)} /><Legend /></PieChart>}</ResponsiveContainer></div></section>;
}
