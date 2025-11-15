"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function FloatingRocks() {
  const rockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shadowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const rocks = rockRefs.current;
    const shadows = shadowRefs.current;

    function setInitialPositions() {
      rocks.forEach((rock) => {
        if (!rock) return;
        const dataset = rock.dataset;

        if (dataset.startTop) rock.style.top = dataset.startTop + "%";
        if (dataset.startRight) rock.style.right = dataset.startRight + "%";
        if (dataset.startLeft) rock.style.left = dataset.startLeft + "%";
        if (dataset.startBottom) rock.style.bottom = dataset.startBottom + "%";
      });
    }

    function updateParallax() {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      rocks.forEach((rock, i) => {
        if (!rock) return;

        const speed = parseFloat(rock.dataset.parallaxSpeed || "1");
        const offset = -scrollY * speed;

        rock.style.transform = `translateY(${offset}px)`;

        const shadow = shadows[i];
        if (!shadow) return;

        const rect = rock.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;

        shadow.style.left = `${centerX}px`;

        const centerY = rect.top + rect.height / 2;

        let opacity = Math.max(
          0,
          Math.min(0.8, (viewportHeight - centerY) / (viewportHeight * 0.6))
        );
        shadow.style.opacity = opacity.toString();

        const scale = 1.2 - rect.top / viewportHeight;
        shadow.style.transform = `translateX(-50%) scale(${scale})`;

        const blur = 10 + (rect.top / viewportHeight) * 25;
        shadow.style.filter = `blur(${blur}px)`;
      });
    }

    setInitialPositions();
    updateParallax();

    window.addEventListener("scroll", updateParallax);
    window.addEventListener("resize", () => {
      setInitialPositions();
      updateParallax();
    });

    return () => {
      window.removeEventListener("scroll", updateParallax);
    };
  }, []);

  return (
    <>
      {/* Rock 1 — Large */}
      <div
        ref={(el) => {
          rockRefs.current[0] = el;
        }}
        data-start-top="15"
        data-start-right="15"
        data-parallax-speed="1.8"
        className="floating-rock-wrapper w-[300px] h-[300px] md:w-[450px] md:h-[450px] absolute"
      >
        <div className="rock-svg-inner relative animate-[var(--animate-float-and-spin)]">          
            <Image
            src="/cobble-road-labs/public/logos/Cobble Road Icon.svg"
            alt="Floating Rock"
            fill
            className="rock-image"
            style={{ ["--rotation" as any]: "0deg" }}
            priority
          />
        </div>
      </div>

      {/* Rock 2 — Medium */}
      <div
        ref={(el) => {
          rockRefs.current[1] = el;
        }}
        data-start-top="10"
        data-start-left="10"
        data-parallax-speed="2.5"
        className="floating-rock-wrapper w-[150px] h-[150px] md:w-[250px] md:h-[250px] absolute"
      >
        <div className="rock-svg-inner animate-[var(--animate-float-and-spin-slow)]">
          <Image
            src="/rock.svg"
            alt="Floating Rock"
            fill
            className="rock-image"
            style={{ ["--rotation" as any]: "90deg" }}
          />
        </div>
      </div>

      {/* Rock 3 — Small */}
      <div
        ref={(el) => {
          rockRefs.current[2] = el;
        }}
        data-start-bottom="5"
        data-start-left="30"
        data-parallax-speed="3.5"
        className="floating-rock-wrapper w-[80px] h-[80px] md:w-[120px] md:h-[120px] absolute"
      >
        <div className="rock-svg-inner animate-[var(--animate-float-and-spin-fast)]">
          <Image
            src="/rock.svg"
            alt="Floating Rock"
            fill
            className="rock-image"
            style={{ ["--rotation" as any]: "180deg" }}
          />
        </div>
      </div>

      {/* Shadows */}
      <div
        ref={(el) => {
          shadowRefs.current[0] = el;
        }}
        id="rock-shadow-1"
        className="rock-floor-shadow absolute"
      />
      <div
        ref={(el) => {
          shadowRefs.current[1] = el;
        }}
        id="rock-shadow-2"
        className="rock-floor-shadow absolute"
      />
      <div
        ref={(el) => {
          shadowRefs.current[2] = el;
        }}
        id="rock-shadow-3"
        className="rock-floor-shadow absolute"
      />
    </>
  );
}
