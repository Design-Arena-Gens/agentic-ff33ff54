interface StatisticCardProps {
  label: string;
  value: string;
  source: string;
}

export function StatisticCard({ label, value, source }: StatisticCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
      <span className="text-sm font-medium uppercase tracking-widest text-slate-500">
        {label}
      </span>
      <span className="text-4xl font-bold text-primary-600">{value}</span>
      <span className="text-sm text-slate-500">Source: {source}</span>
    </div>
  );
}
