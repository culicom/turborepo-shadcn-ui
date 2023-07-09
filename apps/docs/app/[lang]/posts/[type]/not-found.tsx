import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Hero } from "../../../../components/blocks/Hero";

// import { Header } from '@kobalt/ui/typography';
// import { Section } from '@kobalt/ui/sections';

export default function NotFound() {
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
