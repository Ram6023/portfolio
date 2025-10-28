import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const NotFound = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-black text-center px-4 py-20">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20">
        <h1 className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          404
        </h1>
        <p className="mt-4 text-neutral-400">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="inline-block mt-8 px-6 py-2 rounded-full bg-white text-black font-semibold">
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
