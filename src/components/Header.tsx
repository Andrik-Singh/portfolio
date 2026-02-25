"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const tabs = [
  { id: "about", label: "About me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

export default function PillNav() {
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const isHidden = useRef(false);
  const tl = useRef<gsap.core.Tween | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);

 
  useGSAP(() => {
    // Nav entrance
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
      },
    );
    gsap.fromTo(
      linksRef.current.filter(Boolean),
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.09,
        ease: "power2.out",
        delay: 0.55,
      },
    );
  }, []);
  

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 200) {
        if (isHidden.current) showNav();
        lastScrollY.current = currentY;
        return;
      }

      if (currentY > lastScrollY.current + 6) {
        if (!isHidden.current) hideNav();
      } else if (currentY < lastScrollY.current - 6) {
        if (isHidden.current) showNav();
      }

      lastScrollY.current = currentY;
    };

    const hideNav = () => {
      if (!navRef.current) return;
      isHidden.current = true;
      tl.current?.kill();
      tl.current = gsap.to(navRef.current, {
        yPercent: -140,
        opacity: 0.4,
        duration: 0.45,
        ease: "power2.inOut",
      });
    };

    const showNav = () => {
      if (!navRef.current) return;
      isHidden.current = false;
      tl.current?.kill();
      tl.current = gsap.to(navRef.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.55,
        ease: "power3.out",
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      tl.current?.kill();
    };
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    tabs.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveTab(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      ref={navRef}
      style={{ opacity: 0 }} 
      className="
        fixed top-5 
        left-1/2 
        sm:-translate-x-1/2 z-50
        flex 
        sm:items-center justify-between
        px-2 py-2
        rounded-full
        bg-white/70 dark:bg-neutral-900/70
        backdrop-blur-md
        border border-white/40 dark:border-neutral-700/50
        shadow-[0_8px_32px_rgba(0,0,0,0.10),0_1.5px_4px_rgba(0,0,0,0.06)]
        ring-1 ring-black/[0.04]
        sm:w-xs
        w-[300px]
      "
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        ref={indicatorRef}
        className="
          pointer-events-none absolute left-2 top-2 h-[calc(100%-16px)]
          rounded-full bg-neutral-900/8 dark:bg-white/10
          opacity-0
        "
        style={{ width: 80 }} 
        aria-hidden="true"
      />

      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.id;
        return (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            ref={(el) => {
              linksRef.current[index] = el;
            }}
            onClick={() => setActiveTab(tab.id)}
            aria-current={isActive ? "page" : undefined}
            className={`
              relative z-10 rounded-full px-4 py-2 text-sm font-medium
              transition-colors duration-200 select-none outline-none
              flex items-center justify-center
              focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1
              ${
                isActive
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm"
                  : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-slate-200"
              }
            `}
          >
            {tab.label}
          </a>
        );
      })}
    </nav>
  );
}
