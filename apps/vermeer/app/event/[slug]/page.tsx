import Image from "next/image";
import data from "./../../data.json";

import { Star } from "lucide-react";
import { P } from "ui/typography/p";
import { H4 } from "ui/typography/h4";
import { H1 } from "ui/typography/h1";
export default function Home(props: any) {
  const event = data.find((x) => x.slug === props?.params?.slug);

  return (
    <main>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="px-8">
          <div className="mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              width={600}
              height={400}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={event?.img}
            />
            <div className="lg:w-1/2 flex flex-col justify-center w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <H4>{event?.category}</H4>
              <H1>{event?.title}</H1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <Star className="fill-indigo-500 h-4 w-4" />
                  <Star className="fill-indigo-500 h-4 w-4" />
                  <Star className="fill-indigo-500 h-4 w-4" />
                  <Star className="fill-indigo-500 h-4 w-4" />

                  <Star className="h-4 w-4" />
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <P>
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </P>

              <div className="mt-8 flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
