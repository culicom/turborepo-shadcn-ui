import Image from "next/image";
import conor from "./../public/conor.jpeg";
import extension from "./../../public/extension.jpeg";
import renovation from "./../../public/renovation.jpeg";
import first from "./../../public/timmerwerk/1.jpeg";
import second from "./../../public/timmerwerk/2.jpeg";
import third from "./../../public/timmerwerk/3.jpeg";
import fourth from "./../../public/timmerwerk/6.jpeg";
import fifth from "./../../public/timmerwerk/7.jpeg";
import sixth from "./../../public/timmerwerk/8.jpeg";

import aanbouw1 from "./../../public/aanbouw/1.jpeg";
import aanbouw2 from "./../../public/aanbouw/2.jpeg";
import aanbouw3 from "./../../public/aanbouw/3.jpeg";
import aanbouw4 from "./../../public/aanbouw/4.jpeg";
import aanbouw5 from "./../../public/aanbouw/5.jpeg";
import aanbouw6 from "./../../public/aanbouw/6.jpeg";

import renovatie1 from "./../../public/renovatie/1.jpeg";
import renovatie2 from "./../../public/renovatie/2.jpeg";
import renovatie3 from "./../../public/renovatie/3.jpeg";
import renovatie4 from "./../../public/renovatie/4.jpeg";
import renovatie5 from "./../../public/renovatie/5.jpeg";
import renovatie6 from "./../../public/renovatie/6.jpeg";

import carpentry from "./../../public/carpentry.jpeg";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { H1 } from "ui/typography/h1";
import { H2 } from "ui/typography/h2";
import { P } from "ui/typography/p";
import { Button, Label } from "ui";
import { Logo } from "../components/logo";
import Link from "next/link";

const data = {
  timmerwerk: {
    title: "Timmerwerk",
    description: "Tijdens dit evenement",
    hero: carpentry,
    pictures: [first, second, third, fourth, fifth, sixth],
  },
  aanbouw: {
    title: "Aanbouw",
    description: "Tijdens dit evenement",
    hero: extension,
    pictures: [aanbouw1, aanbouw2, aanbouw3, aanbouw4, aanbouw5, aanbouw6],
  },
  renovatie: {
    title: "Renovatie",
    description: "Tijdens dit evenement",
    hero: renovation,
    pictures: [
      renovatie1,
      renovatie2,
      renovatie3,
      renovatie4,
      renovatie5,
      renovatie6,
    ],
  },
};

export default function Service(props: any) {
  console.log(props);
  return (
    <section className="my-12  text-gray-600 body-font">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className=" md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <H1>Bouwen met vakmanschap, renovaties met passie</H1>

          <div className="mt-8 space-x-4 flex justify-center">
            <Button variant="action">Vraag direct een offerte aan</Button>
          </div>
        </div>
        <div className="lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover aspect-video object-center rounded"
            alt="hero"
            src={data[props?.params?.service]?.hero}
          />
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              havent heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  src={data[props?.params?.service]?.pictures[0]}
                  className="w-full object-cover h-full object-center block"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={data[props?.params?.service]?.pictures[1]}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={data[props?.params?.service]?.pictures[2]}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={data[props?.params?.service]?.pictures[3]}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={data[props?.params?.service]?.pictures[4]}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={data[props?.params?.service]?.pictures[5]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
