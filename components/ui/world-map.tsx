"use client";

import DottedMap from "dotted-map";
import { motion } from "motion/react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

interface MapPoint {
  lat: number;
  lng: number;
  label?: string;
}

interface MapProps {
  dots?: Array<{
    start: MapPoint;
    end: MapPoint;
  }>;
  lineColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number },
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const dotsWithIds = dots.map((dot, i) => ({
    ...dot,
    id: `dot-${i}`,
  }));

  return (
    <div className="w-full aspect-[2/1] rounded-lg relative font-sans">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map showing global connectivity"
        height={495}
        width={1056}
        draggable={false}
        priority
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 select-none"
        style={{ overflow: "visible" }}
        aria-label="Interactive world map with connection paths"
      >
        <title>World Map Connections</title>

        {/* PATHS */}
        {dotsWithIds.map((dot, index) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);

          return (
            <motion.path
              key={`path-${dot.id}`}
              d={createCurvedPath(startPoint, endPoint)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
            />
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* POINTS + TOOLTIPS */}
        {dotsWithIds.map((dot) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);

          return (
            <g key={`points-${dot.id}`}>
              {/* START */}
              <g
                className="group pointer-events-auto"
                transform={`translate(${start.x}, ${start.y})`}
              >
                <circle r="2" fill={lineColor} />
                <circle r="2" fill={lineColor} opacity="0.5">
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {!isMobile && dot.start.label && (
                  <foreignObject x={-60} y={-36} width={120} height={28}>
                    <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-black/80 px-2 py-1 rounded text-center">
                      {dot.start.label}
                    </div>
                  </foreignObject>
                )}
              </g>

              {/* END */}
              <g
                className="group pointer-events-auto"
                transform={`translate(${end.x}, ${end.y})`}
              >
                <circle r="2" fill={lineColor} />
                <circle r="2" fill={lineColor} opacity="0.5">
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {!isMobile && dot.end.label && (
                  <foreignObject x={-60} y={-36} width={120} height={28}>
                    <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-black/80 px-2 py-1 rounded text-center">
                      {dot.end.label}
                    </div>
                  </foreignObject>
                )}
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
