type Props = { label: string; active: boolean; onClick: () => void };

export function ChartTypeButton({ label, active, onClick }: Props) {
  return <button onClick={onClick} className={`rounded-lg px-3 py-2 text-sm font-medium transition ${active ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100"}`}>{label}</button>;
}
