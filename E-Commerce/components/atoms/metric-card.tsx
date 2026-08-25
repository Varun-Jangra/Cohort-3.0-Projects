import { type LucideIcon } from "lucide-react";

type Props = { label: string; value: string; detail: string; icon: LucideIcon; accent: string };

export function MetricCard({ label, value, detail, icon: Icon, accent }: Props) {
  return <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-start justify-between"><div><p className="text-sm text-slate-500">{label}</p><p className="mt-2 text-2xl font-bold tracking-tight">{value}</p></div><span className={`rounded-xl p-3 ${accent}`}><Icon size={20} /></span></div>
    <p className="mt-4 text-sm text-emerald-600">{detail}</p>
  </article>;
}
