import { Section } from "@/components/Section";
import { StatisticCard } from "@/components/StatisticCard";
import { Timeline } from "@/components/Timeline";

const supportingPoints = [
  {
    title: "Future Workforce Preparedness",
    body: "Children who encounter AI concepts early build intuition about automation, pattern recognition, and human-machine collaboration. By demystifying algorithms in primary school, we shield students from seeing AI as an opaque black box later in life.",
  },
  {
    title: "Equity and Inclusion",
    body: "Delaying AI and digital skill instruction preserves inequities. Students from tech-rich homes accelerate, while others are left behind. Primary schools can level the field by providing structured, age-appropriate exposure to digital creation, not just consumption.",
  },
  {
    title: "Ethical Grounding",
    body: "Primary classrooms already teach citizenship and empathy. Introducing miniature ethics exercises about data privacy, bias, and AI-powered decision making gives children a moral compass before habits calcify.",
  },
];

const responsibleConditions = [
  "Teacher upskilling with ongoing coaching and co-teaching support",
  "Age-appropriate curriculum that favors play, storytelling, and unplugged activities",
  "Guardrails on data privacy, aligned with COPPA and GDPR-K standards",
  "Assessment models that reward creativity and collaboration instead of rote coding drills",
];

export default function Page() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 sm:px-10 lg:px-16">
      <header className="rounded-3xl border border-transparent bg-gradient-to-br from-primary-600 via-primary-500 to-indigo-500 p-[1px] shadow-lg">
        <div className="rounded-[calc(1.5rem-1px)] bg-slate-950/90 p-12 text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-200/80">
            Argumentative Presentation
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Should AI & Digital Skills Be Taught in Primary School Now?
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-primary-100/80">
            A persuasive case that early, thoughtful integration of artificial intelligence literacy and
            digital craftsmanship is no longer optional—it is the new baseline for equitable education.
          </p>
        </div>
      </header>

      <Section id="thesis" eyebrow="Position" title="Yes—if we do it intentionally">
        <p>
          We should begin teaching AI concepts and digital skills in primary school immediately. The
          alternative is a widening divide between students who can shape technology and those who are
          merely shaped by it. Primary classrooms can translate complex ideas into play-based
          exploration, embedding ethics and critical thinking alongside creativity.
        </p>
      </Section>

      <Section id="context" eyebrow="Backdrop" title="Why the question matters in 2024">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p>
              The acceleration of AI tools has collapsed the time available to prepare the next
              generation. Chatbots, adaptive learning engines, and algorithmic decision systems are now
              part of the everyday environment. By age ten, many children already interact with AI
              implicitly, yet lack the vocabulary to question it. Primary education is our only universal
              touchpoint to guarantee digital agency for every child.
            </p>
            <p>
              Global policy bodies are shifting from pilot programs to mandates. Waiting until secondary
              school risks graduating students into workplaces where foundational AI literacy is assumed.
            </p>
          </div>
          <div className="space-y-4">
            <StatisticCard
              label="Schools planning AI lessons"
              value="62%"
              source="HolonIQ 2024 K-12 Innovation Survey"
            />
            <StatisticCard
              label="Employers expecting AI fluency"
              value="71%"
              source="LinkedIn Workforce Report"
            />
          </div>
        </div>
      </Section>

      <Section id="arguments" eyebrow="Core Arguments" title="Four pillars for immediate adoption">
        <div className="grid gap-6 md:grid-cols-2">
          {supportingPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-3 text-slate-600">{point.body}</p>
            </article>
          ))}
          <article className="md:col-span-2 rounded-2xl border border-primary-200/80 bg-primary-50 p-6">
            <h3 className="text-xl font-semibold text-primary-800">
              Counterbalance: protecting childhood and wellbeing
            </h3>
            <p className="mt-3 text-primary-700">
              Critics argue that early exposure may accelerate screen time or overburden teachers. This
              is precisely why curricula must emphasize unplugged computational thinking, collaborative
              projects, and ethical storytelling before keyboards. The goal is resilience, not relentless
              coding drills.
            </p>
          </article>
        </div>
      </Section>

      <Section id="timeline" eyebrow="Momentum" title="Global timeline toward AI-fluent classrooms">
        <Timeline />
      </Section>

      <Section id="conditions" eyebrow="Safeguards" title="Conditions for responsible implementation">
        <p>
          Teaching AI in primary school is not a blind rush to technology. It is a structured move that
          combines pedagogy, policy, and community safeguards. The following guardrails ensure that
          learning remains joyful and humane:
        </p>
        <ul>
          {responsibleConditions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section id="call-to-action" eyebrow="Call to Action" title="What leaders should do this year">
        <ul>
          <li>
            Ministries of education: launch national AI literacy frameworks that pair curriculum with
            teacher scholarships and micro-credential incentives.
          </li>
          <li>
            School leaders: audit existing digital access, invest in creative labs, and partner with
            local technologists to co-design experiential modules.
          </li>
          <li>
            Teachers: begin with storytelling and ethics conversations, then layer in visual
            programming, data journaling, and reflective practice.
          </li>
          <li>
            Families: treat AI as a dinner-table conversation topic. Ask children how decisions are
            made, where data comes from, and who benefits.
          </li>
        </ul>
      </Section>

      <Section id="closing" eyebrow="Final Appeal" title="A closing statement for the debate room">
        <p>
          We stand at the same moment literacy reformers faced a century ago. Then, the question was
          whether all children deserved reading and numeracy. Today, it is whether they deserve digital
          agency. Teaching AI and digital skills in primary school—anchored in play, ethics, and human
          creativity—is how we guarantee that agency. The cost of waiting is a generation fluent only in
          consumption, not in shaping the tools that will define their world.
        </p>
      </Section>
    </main>
  );
}
