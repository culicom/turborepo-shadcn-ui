"use client";

import React from "react";
import { Hero } from "../../../components/blocks/Hero";

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log("logging error:", error);
  }, [error]);

  return (
    <div>
      <Hero
        tag="SERVICE"
        title="Zie wat Kobalt voor uw bedrijf kan betekenen"
        payline="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
            lacus nec urna imperdiet venenatis in at magna. Nulla ultrices
            semper dui, at maximus risus ultrices id."
      />
    </div>
  );
}
