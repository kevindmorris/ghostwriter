import React from "react";
import Typewriter from "./Typewriter";

export default function HomePage() {
  return (
    <div className="px-4 py-12 lg:py-6 text-center">
      <Typewriter
        text="Welcome to ghostwriter."
        delay={100}
        className="text-3xl lg:text-5xl"
      />
      <p className="my-2 lg:my-4">
        This application is dedicated to Jack Antonoff, the greatest ghostwriter
        of all time.
      </p>
    </div>
  );
}
