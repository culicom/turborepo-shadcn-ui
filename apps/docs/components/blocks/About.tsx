import { Renderer } from "../renderer";
import { H2 } from "ui/typography/h2";
import { H4 } from "ui/typography/h4";
import { P } from "ui/typography/p";

const data = [
  {
    title: "Zelf te beheren",
    richText: [
      {
        children: [
          {
            type: "p",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ],
      },
    ],
  },
  {
    title: "All inclusive",
    richText: [
      {
        children: [
          {
            type: "p",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ],
      },
    ],
  },
  {
    title: "Professioneel webdesign",
    richText: [
      {
        children: [
          {
            type: "p",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ],
      },
    ],
  },
  {
    title: "SEO",
    richText: [
      {
        children: [
          {
            type: "p",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ],
      },
    ],
  },
  {
    title: "Vertaling",
    richText: [
      {
        children: [
          {
            type: "p",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ],
      },
    ],
  },
  {
    title: "Gebruiksvriendelijk",
    richText: [
      {
        children: [
          {
            type: "p",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ],
      },
    ],
  },
];

export function AboutBlock() {
  return (
    <div className="my-16 md:my-32">
      <article className="mx-auto max-w-3xl md:text-center">
        <H4>Lorem</H4>

        <H2 className="mt-0 border-none">Kobalt.</H2>

        <P>
          Kobalt biedt (startende) ondernemers de mogelijkheid om op een
          laagdrempelige en voorspelbare manier hun dienst, merk of product
          online zichtbaar en vindbaar te maken. Dit doet Kobalt door moderne en
          op maat gemaakte websites aan te bieden voor een vast bedrag per
          maand.
        </P>
      </article>

      <ul className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((item) => (
          <li className="prose p-0" key={item?.title}>
            <div>
              <div className="mb-9 flex justify-center text-center">
                <svg
                  width="46"
                  height="50"
                  viewBox="0 0 46 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.75 6.25049H25V10.4172H43.75C44.3025 10.4172 44.8324 10.1977 45.2231 9.80696C45.6138 9.41626 45.8333 8.88636 45.8333 8.33382C45.8333 7.78129 45.6138 7.25138 45.2231 6.86068C44.8324 6.46998 44.3025 6.25049 43.75 6.25049Z"
                    fill="#4A6CF7"
                  ></path>
                  <path
                    d="M2.08333 10.4172H12.5V16.6672H20.8333V0.000488281H12.5V6.25049H2.08333C1.5308 6.25049 1.00089 6.46998 0.610193 6.86068C0.219492 7.25138 0 7.78129 0 8.33382C0 8.88636 0.219492 9.41626 0.610193 9.80696C1.00089 10.1977 1.5308 10.4172 2.08333 10.4172Z"
                    fill="#4A6CF7"
                  ></path>
                  <path
                    d="M43.75 39.5839H25V43.7505H43.75C44.3025 43.7505 44.8324 43.531 45.2231 43.1403C45.6138 42.7496 45.8333 42.2197 45.8333 41.6672C45.8333 41.1147 45.6138 40.5848 45.2231 40.1941C44.8324 39.8034 44.3025 39.5839 43.75 39.5839Z"
                    fill="#4A6CF7"
                  ></path>
                  <path
                    d="M2.08333 43.7505H12.5V50.0005H20.8333V33.3339H12.5V39.5839H2.08333C1.5308 39.5839 1.00089 39.8034 0.610193 40.1941C0.219492 40.5848 0 41.1147 0 41.6672C0 42.2197 0.219492 42.7496 0.610193 43.1403C1.00089 43.531 1.5308 43.7505 2.08333 43.7505Z"
                    fill="#4A6CF7"
                  ></path>
                  <path
                    opacity="0.5"
                    d="M43.75 22.9171H37.5V27.0838H43.75C44.3025 27.0838 44.8324 26.8643 45.2231 26.4736C45.6138 26.0829 45.8333 25.553 45.8333 25.0004C45.8333 24.4479 45.6138 23.918 45.2231 23.5273C44.8324 23.1366 44.3025 22.9171 43.75 22.9171ZM2.08333 27.0838H25V33.3338H33.3333V16.6671H25V22.9171H2.08333C1.5308 22.9171 1.00089 23.1366 0.610193 23.5273C0.219492 23.918 0 24.4479 0 25.0004C0 25.553 0.219492 26.0829 0.610193 26.4736C1.00089 26.8643 1.5308 27.0838 2.08333 27.0838Z"
                    fill="#4A6CF7"
                  ></path>
                </svg>
              </div>
              <h3 className="mt-8 scroll-m-20 text-center text-2xl font-semibold tracking-tight">
                {item?.title}
              </h3>

              <Renderer content={item.richText} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
