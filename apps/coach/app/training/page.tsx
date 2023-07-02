import Image from "next/image";
import maarten from "./../../public/maarten-2.jpeg";
import clique from "./../../public/clique.jpeg";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { H1 } from "ui/typography/h1";
import { H2 } from "ui/typography/h2";
import { P } from "ui/typography/p";
import { Button } from "ui";
import { Logo } from "../../components/logo";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col-reverse items-center">
          <div className="mt-8 md:mt-0 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center space-y-8 text-center">
            <H1>Leef gezond, eet bewust, bereik je doelen!</H1>
            <P className="text-lg text-muted-foreground">
              Als ervaren voedingscoach met een passie voor gezondheid, help ik
              je graag om je eetgewoonten te verbeteren en jouw specifieke
              doelen te bereiken. Met mijn persoonlijke begeleiding en
              wetenschappelijk onderbouwde adviezen leer ik je hoe je bewuste
              keuzes kunt maken en een gezonde levensstijl kunt volhouden.
            </P>
            <div className="flex justify-center">
              <Button variant="default">Button</Button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src={maarten}
              className="object-cover object-center rounded"
              alt="hero"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
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
              <H2>FoodFit Online</H2>
              <P>
                Word fit en gezond met FoodFit Online, het interactieve
                programma van voedingscoach Maarten. Leer de juiste
                voedingskeuzes te maken, behaal je doelen en transformeer je
                levensstijl, allemaal vanuit het comfort van je eigen huis.
              </P>
            </div>
            <div className="sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                100+
              </h2>
              <p className="leading-relaxed">Online trainees</p>
            </div>
            <div className="sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.8K
              </h2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div className="sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                35
              </h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
            <div className="sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                4
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-row-reverse flex-wrap w-full">
            <div className="px-8 lg:w-2/3 md:w-1/2  md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 1
                  </h2>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed">
                    Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
                    slow-carb health goth, vape typewriter.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed">
                    Coloring book nar whal glossier master cleanse umami. Salvia
                    +1 master cleanse blog taiyaki.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 4
                  </h2>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    FINISH
                  </h2>
                  <p className="leading-relaxed">
                    Pitchfork ugh tattooed scenester echo park gastropub
                    whatever cold-pressed retro.
                  </p>
                </div>
              </div>
            </div>
            <Image
              className="object-cover object-center lg:w-1/3 md:w-1/2 rounded-lg md:mt-0 mt-12"
              src={clique}
              alt="stats"
            />
          </div>
        </div>
      </section> */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <H2>Pitchfork Kickstarter Taxidermy</H2>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              havent heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Chichen Itza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/721x401"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Colosseum Roma
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/722x402"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Great Pyramid of Giza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/723x403"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
