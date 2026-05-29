"use client";

import React, { useEffect } from "react";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Scroll progress bar
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = (window.scrollY / scrollHeight) * 100;

      const progressBar = document.getElementById("scroll-progress");

      if (progressBar) progressBar.style.width = scrolled + "%";
    };

    window.addEventListener("scroll", handleScroll);

    // Mouse movement tracker
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".glass-card");

      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.05 }
    );

    const revealElements = document.querySelectorAll(".scroll-reveal");

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);

      window.removeEventListener("mousemove", handleMouseMove);

      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Development-only: capture router-init related errors to aid debugging
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    const onError = (e: ErrorEvent) => {
      try {
        const msg = e?.message || "";
        if (msg.includes("Router action dispatched before initialization") || msg.includes("invariant expected app router to be mounted")) {
          // Log full error and stack for diagnosis
          // eslint-disable-next-line no-console
          console.group("[Dev] Router initialization error captured");
          // eslint-disable-next-line no-console
          console.error(e.error || e.message, e);
          // eslint-disable-next-line no-console
          console.trace();
          // eslint-disable-next-line no-console
          console.groupEnd();
        }
      } catch (err) {
        // noop
      }
    };

    const onRejection = (e: PromiseRejectionEvent) => {
      try {
        const reason = (e && (e.reason as any)) || {};
        const msg = reason?.message || String(reason || "");
        if (msg.includes("Router action dispatched before initialization") || msg.includes("invariant expected app router to be mounted")) {
          // eslint-disable-next-line no-console
          console.group("[Dev] Router initialization promise rejection captured");
          // eslint-disable-next-line no-console
          console.error(reason, e);
          // eslint-disable-next-line no-console
          console.trace();
          // eslint-disable-next-line no-console
          console.groupEnd();
        }
      } catch (err) {
        // noop
      }
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return <>{children}</>;
}