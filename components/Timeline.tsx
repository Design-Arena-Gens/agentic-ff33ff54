interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2020",
    title: "Digital literacy becomes essential",
    description:
      "UNESCO highlights digital skills as foundational for social inclusion and economic participation.",
  },
  {
    year: "2022",
    title: "AI tools enter classrooms",
    description:
      "Generative AI spreads to mainstream education, prompting debates on early-age preparedness.",
  },
  {
    year: "2024",
    title: "Policy momentum grows",
    description:
      "OECD and EU member states pilot AI literacy frameworks for primary-aged learners.",
  },
  {
    year: "2026",
    title: "Hybrid curricula expected",
    description:
      "Analysts forecast that schools blending computational thinking and AI ethics will outperform peers.",
  },
];

export function Timeline() {
  return (
    <div className="relative ml-2 border-l-2 border-primary-200 pl-8">
      {timeline.map((entry) => (
        <div key={entry.year} className="mb-10 last:mb-0">
          <div className="absolute -left-[13px] mt-2 h-6 w-6 rounded-full border-4 border-white bg-primary-500 shadow" />
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-500">
            {entry.year}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">
            {entry.title}
          </h3>
          <p className="mt-2 text-base text-slate-600">{entry.description}</p>
        </div>
      ))}
    </div>
  );
}
