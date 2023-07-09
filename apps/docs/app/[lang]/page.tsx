import { AboutBlock } from "./../../components/blocks/About";
import { AccordionBlock } from "./../../components/blocks/Accordion";
import { FeatureBlock } from "./../../components/blocks/Features";
import { Hero } from "./../../components/blocks/Hero";
import { PostBlock } from "./../../components/blocks/Posts";

export default async function IndexPage(props: any) {
  return (
    <div>
      <Hero
        tag="Website nodig?"
        title="Professionele websites voor (startende) ondernemers."
        payline="Voor een vast bedrag per maand kun je altijd maatwerk verwachten en ben je zorgeloos online (inclusief hosting en domeinnaam). Tevens is je website maandelijks opzegbaar."
      />

      <FeatureBlock />

      <PostBlock
        locale="nl"
        token={"null"}
        type={{ value: { name: "showcase", id: "63e29b7245a339dda4a0179a" } }}
      />

      <AboutBlock />

      <PostBlock
        locale="nl"
        token={"null"}
        type={{ value: { name: "blog", id: "63e29b5845a339dda4a01787" } }}
      />

      <AccordionBlock />
    </div>
  );
}
