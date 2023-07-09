import Image from "next/image";
import conor from "./../public/conor.jpeg";
import extension from "./../public/extension.jpeg";
import renovation from "./../public/renovation.jpeg";
import carpentry from "./../public/carpentry.jpeg";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { H1 } from "ui/typography/h1";
import { H2 } from "ui/typography/h2";
import { P } from "ui/typography/p";
import { Button, Label } from "ui";
import { Logo } from "../components/logo";
import Link from "next/link";

const events = [
  {
    title: "Voedingsmythes Ontkracht",
    date: "10 juli 2023",
    category: "Food",
    description:
      "Tijdens dit evenement zal voedingscoach Maarten de meest voorkomende voedingsmythes en misvattingen bespreken. Leer de waarheid achter populaire voedingsclaims en krijg wetenschappelijk onderbouwde informatie om gezonde keuzes te maken.",
  },
  {
    title: "Meal Prep Masterclass",
    date: "25 augustus 2023",
    category: "Food",
    description:
      "Leer hoe je efficiënt en effectief maaltijden kunt voorbereiden tijdens deze praktische masterclass. Maarten deelt handige tips, recepten en strategieën om maaltijdplanning en meal prepping in je dagelijkse routine op te nemen, zodat je altijd gezonde opties bij de hand hebt.",
  },
  {
    title: "Eet je Fit: Sportvoeding 101",
    date: "12 september 2023",
    category: "Food",
    description:
      "Ontdek hoe je je prestaties in de sportschool naar een hoger niveau kunt tillen door middel van de juiste voeding. Tijdens dit evenement leer je welke voedingsstoffen essentieel zijn voor sportieve prestaties, hoe je je energie kunt optimaliseren en welke maaltijden en snacks het beste zijn voor herstel en spieropbouw.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className=" md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <H1>Bouwen met vakmanschap, renovaties met passie</H1>

            <div className="mt-8 space-x-4 flex justify-center">
              <Button variant="action">Vraag direct een offerte aan</Button>
            </div>
          </div>
          <div className="lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={conor}
            />
          </div>
        </div>
      </section>
      {/* <section className="text-gray-600 body-font">
        <div className="container py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/3 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <Image
              className="object-cover object-center w-full h-full"
              src={clique}
              alt="stats"
            />
          </div>
          <div className="md:pl-16 flex flex-wrap mt-auto mb-auto lg:w-2/3 sm:w-2/3 content-start sm:pr-10">
            <div className="my-8 md:mt-0 w-full space-y-4 mb-6">
              <H2 className="mt-4">FoodFit Online</H2>
              <P>
                Word fit en gezond met FoodFit Online, het interactieve
                programma van voedingscoach Maarten. Leer de juiste
                voedingskeuzes te maken, behaal je doelen en transformeer je
                levensstijl, allemaal vanuit het comfort van je eigen huis.
              </P>
            </div>
            <div className="sm:w-1/2 lg:w-1/4 w-1/2">
              <H2 className="mt-4">
                100+
              </H2>
              <p className="leading-relaxed">Online trainees</p>
            </div>
            <div className="sm:w-1/2 lg:w-1/4 w-1/2">
              <H2 className="mt-4">
                1.8K
              </H2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div className="sm:w-1/2 lg:w-1/4 w-1/2">
              <H2 className="mt-4">
                35
              </H2>
              <p className="leading-relaxed">Downloads</p>
            </div>
            <div className="sm:w-1/2 lg:w-1/4 w-1/2">
              <H2 className="mt-4">
                4
              </H2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Space The Final Frontier
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Street art subway tile salvia four dollar toast bitters selfies
                quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                Viral gochujang bitters dreamcatcher.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={carpentry}
                />
              </div>
              <H2 className="mt-4">Timmerwerk</H2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <Button variant="link" asChild className="ml-auto">
                <Link href="#">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </Button>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={extension}
                />
              </div>
              <H2 className="mt-4">Aanbouw</H2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <Button variant="link" asChild className="ml-auto">
                <Link href="#">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </Button>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={renovation}
                />
              </div>
              <H2 className="mt-4">Renovatie</H2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <Button variant="link" asChild className="ml-auto">
                <Link href="#">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
