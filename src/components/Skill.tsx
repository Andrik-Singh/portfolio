"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Monitor, Database, Settings2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ── Data ──────────────────────────────────────────────────────────────────────
const skillGroups = [
  {
    category: "Frontend",
    icon: <Monitor className="h-4 w-4" />,
    description: "Building responsive, high-performance user interfaces.",
    skills: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    icon: <Database className="h-4 w-4" />,
    description: "Designing scalable APIs and data layers.",
    skills: ["Node.js", "PostgreSQL", "Drizzle ORM", "REST APIs", "WebSockets"],
  },
  {
    category: "Tooling & DevOps",
    icon: <Settings2 className="h-4 w-4" />,
    description: "Shipping, testing, and maintaining production apps.",
    skills: [
      "Git & GitHub",
      "Vercel",
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      // Heading fade-up on scroll
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        },
      );

      // Cards stagger in
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-28"
      style={{
        background:
          "linear-gradient(160deg, #ede0d4 0%, #f5e6d3 35%, #faecd8 70%, #fdf6ee 100%)",
      }}
    >
      {/* Paper texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* Subtle warm orb */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, #f6a96230 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Section heading */}
        <div ref={headingRef} className="mb-16 opacity-0">
          <p
            className="mb-2 text-sm tracking-widest text-[#b07040] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            What I work with
          </p>
          <h2
            className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-tight tracking-tight text-[#2d1f14]"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Skills &{" "}
            <em
              className="not-italic"
              style={{
                background:
                  "linear-gradient(135deg, #c8753a 0%, #e0956a 50%, #c86a3a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              tools
            </em>
          </h2>
          <p
            className="mt-4 max-w-md text-[1rem] leading-relaxed text-[#9a6a48]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Technologies I reach for day-to-day to build production-ready
            applications.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              ref={(el) => {
                cardsRef.current[gi] = el;
              }}
              className="
                group opacity-0 rounded-2xl border border-[#e4ccb0]/60
                bg-[#fffaf4]/70 p-7 shadow-sm backdrop-blur-sm
                transition-shadow duration-300 hover:shadow-md
              "
            >
              {/* Card header */}
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e4ccb0] bg-[#fff3e6] text-[#c8753a] shadow-sm">
                  {group.icon}
                </span>
                <h3
                  className="text-base font-semibold text-[#2d1f14]"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                >
                  {group.category}
                </h3>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-[#7a5c48]">
                {group.description}
              </p>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-lg border border-[#dcc9b0]/50 bg-[#fff3e6]/40
                      px-2.5 py-1 text-[0.8rem] font-medium text-[#4a3020]
                    "
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
