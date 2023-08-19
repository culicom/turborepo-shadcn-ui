import { H2 } from "ui/typography/h2";

const list = [
  {
    title: "Eenmalige ontwikkelkosten",
    richText:
      "Je betaalt eenmaling €500,- voor het ontwikkelen van een uniek website ontwerp inclusief doordachte huisstijl. Integraties zijn inbegrepen.",
  },
  {
    title: "De website is live",
    richText:
      "Hierna betaal je €100 per maand voor de hosting, onderhoud en support van jouw website.",
  },
  {
    title: "Ook een webshop nodig?",
    richText:
      "Voor het toevoegen van een op maat gemaakte webshop vragen wij €50 per maand.",
  },
];

export function FeatureBlock() {
  return (
    <div className="my-16 md:my-36 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <H2 className="text-blue-950 dark:text-white border-none">
        Altijd een werkende website voor €100 per maand:
      </H2>

      <div>
        <ul>
          {list?.map((item, index) => (
            <li className="mb-8 flex" key={item?.title}>
              {/* {icons[index]} */}
              <div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  {item?.title}
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {item?.richText}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
