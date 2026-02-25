"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const projects = [
  {
    title: "NoteTaker2",
    description:
      "A real-time collaborative rich text platform built with CRDT-based synchronization using Liveblocks and Yjs. Architected with Next.js App Router, Server Actions, and a fully type-safe PostgreSQL + Drizzle backend.",
    tags: [
      "Next.js",
      "TypeScript",
      "Liveblocks",
      "Yjs",
      "Tiptap",
      "PostgreSQL",
      "Drizzle ORM",
    ],
    year: "2026",
    live: "https://note-taker2-seven.vercel.app",
    github: "https://github.com/Andrik-Singh/NoteTaker2",
  },
  {
    title: "Gym AI",
    description:
      "AI-assisted fitness web application featuring secure server-side AI invocation, authenticated user flows, and a typed PostgreSQL database powered by Drizzle ORM.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Gemini API",
      "Better Auth",
    ],
    year: "2025",
    live: "https://gym-lac-nine.vercel.app",
    github: "https://github.com/Andrik-Singh/gym",
  },
  {
    title: "MovieClone",
    description:
      "A movie discovery platform powered by TMDB with authenticated watchlists, server-driven rendering,structured database modeling and ai assistance to find you movies based on your preference",
    tags: ["Next.js", "PostgreSQL", "Drizzle ORM", "Clerk", "TMDB API","Vercel SDK"],
    year: "2025",
    live: "https://watchmovies-six.vercel.app",
    github: "https://github.com/Andrik-Singh/movieClone",
  },
];

function IconGithub() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        },
      );
      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: card, start: "top 88%" },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-28"
      style={{
        background:
          "linear-gradient(160deg, #fdf6ee 0%, #faecd8 40%, #f5e6d3 75%, #ede0d4 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-[450px] w-[450px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 40% 60%, #f6a96228 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <div ref={headingRef} className="mb-14 opacity-0">
          <p
            className="mb-2 text-sm tracking-widest text-[#b07040] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ✦ &nbsp; Things I've built
          </p>
          <h2
            className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-tight tracking-tight text-[#2d1f14]"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Selected{" "}
            <em
              className="not-italic"
              style={{
                background:
                  "linear-gradient(135deg, #c8753a 0%, #e0956a 50%, #c86a3a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              projects
            </em>
          </h2>
          <p
            className="mt-4 max-w-md text-[1rem] leading-relaxed text-[#9a6a48]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            A handful of things I'm proud of — from side projects to production
            apps.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="group opacity-0 flex flex-col justify-between rounded-2xl border border-[#e4ccb0]/60 bg-[#fffaf4]/70 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div>
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="rounded-full border border-[#dcc9b0] bg-[#fff3e6] px-3 py-1 text-xs font-medium text-[#9a6a48]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {project.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-[#c4a882] transition-colors duration-200 hover:text-[#c8753a]"
                      >
                        <IconGithub />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live site"
                        className="text-[#c4a882] transition-colors duration-200 hover:text-[#c8753a]"
                      >
                        <IconExternal />
                      </a>
                    )}
                  </div>
                </div>
                <h3
                  className="mb-2.5 font-serif text-xl font-normal text-[#2d1f14] transition-colors duration-200 group-hover:text-[#c8753a]"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                >
                  {project.title}
                </h3>
                <p
                  className="mb-5 text-sm leading-relaxed text-[#7a5c48]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#e4ccb0] bg-[#fff8f0] px-2.5 py-0.5 text-xs text-[#a07858]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-1.5 text-sm font-medium text-[#b07040] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:gap-2.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  View project <IconArrow />
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-[#d4b090] bg-[#fff8f0]/60 px-7 py-3 text-sm font-medium text-[#7a5c48] backdrop-blur-sm transition-all duration-300 hover:border-[#c8753a] hover:text-[#c8753a]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <IconGithub />
            See all projects on GitHub
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <IconArrow />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
