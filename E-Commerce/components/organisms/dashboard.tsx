"use client";

import { useMemo, useState } from "react";
import { CreditCard, PackageCheck, ShoppingBag, TrendingUp } from "lucide-react";
import { FilterBar } from "@/components/molecules/filter-bar";
import { MetricCard } from "@/components/atoms/metric-card";
import { SalesChart } from "@/components/organisms/sales-chart";
import { formatCurrency, salesByYear } from "@/lib/sales-data";

export function Dashboard() {
  const [year, setYear] = useState(2024);
  const [threshold, setThreshold] = useState("");
  const data = useMemo(() => {
    const minimum = Number(threshold) || 0;
    return salesByYear[year].filter((item) => item.sales >= minimum);
  }, [year, threshold]);
  const total = data.reduce((sum, item) => sum + item.sales, 0);
  const orders = data.reduce((sum, item) => sum + item.orders, 0);
  const average = data.length ? total / data.length : 0;

  return <main className="min-h-screen bg-slate-50"><header className="border-b border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 font-bold text-white">SI</span><div><h1 className="font-bold">Sales Insight</h1><p className="text-xs text-slate-500">Retail performance dashboard</p></div></div><span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">2022–2024</span></div></header><div className="mx-auto max-w-7xl space-y-6 px-5 py-8"><div><p className="text-sm font-medium text-indigo-600">DASHBOARD</p><h2 className="mt-1 text-3xl font-bold tracking-tight">Make sense of your sales</h2><p className="mt-2 text-slate-500">A simple view of mock retail performance inspired by a Kaggle FMCG dataset.</p></div><FilterBar year={year} threshold={threshold} onYearChange={setYear} onThresholdChange={setThreshold} /><section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><MetricCard label="Total revenue" value={formatCurrency(total)} detail="↑ 12.4% from last year" icon={TrendingUp} accent="bg-indigo-50 text-indigo-600" /><MetricCard label="Total orders" value={orders.toLocaleString()} detail="↑ 8.1% from last year" icon={ShoppingBag} accent="bg-sky-50 text-sky-600" /><MetricCard label="Average monthly sale" value={formatCurrency(average)} detail={`${data.length} months shown`} icon={CreditCard} accent="bg-violet-50 text-violet-600" /><MetricCard label="Best month" value={data.length ? data.reduce((best, item) => item.sales > best.sales ? item : best).month : "—"} detail={data.length ? formatCurrency(Math.max(...data.map((item) => item.sales))) : "No matching sales"} icon={PackageCheck} accent="bg-emerald-50 text-emerald-600" /></section>{data.length ? <SalesChart data={data} year={year} /> : <section className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center"><h2 className="font-semibold">No sales meet this threshold</h2><p className="mt-1 text-sm text-slate-500">Lower the value to see monthly data.</p></section>}<p className="text-center text-xs text-slate-400">Data is local, illustrative mock data for a portfolio project.</p></div></main>;
}
