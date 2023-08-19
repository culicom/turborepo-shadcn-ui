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
        title={
          <span className="inline">
            Professionele websites voor (startende) ondernemers{" "}
            <span className="group">
              <span className="group-hover:hidden inline">🌍</span>
              <span className="group-hover:inline hidden ">🌎</span>
            </span>
          </span>
        }
        payline="Voor een vast bedrag per maand krijg je een uniek webontwerp en ben je zorgeloos online (inclusief hosting en domeinnaam). Je website is maandelijks opzegbaar."
      />

      <FeatureBlock />
      {/* 
      <PostBlock
        locale="nl"
        token={"null"}
        type={{ value: { name: "showcase", id: "63e29b7245a339dda4a0179a" } }}
      /> */}
      <PostBlock
        locale="nl"
        token={"null"}
        type={{ value: { name: "blog", id: "63e29b5845a339dda4a01787" } }}
      />

      <AboutBlock />

      <AccordionBlock />
    </div>
  );
}
