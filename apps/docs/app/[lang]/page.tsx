import { cn } from "lib";
import { AboutBlock } from "./../../components/blocks/About";
import { AccordionBlock } from "./../../components/blocks/Accordion";
import { FeatureBlock } from "./../../components/blocks/Features";
import { Hero } from "./../../components/blocks/Hero";
import { PostBlock } from "./../../components/blocks/Posts";
import React from "react";

async function getPage(lang) {
  const data = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=home&locale=${lang}&depth=5`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 0 },
    }
  );

  return data.json();
}

type Props = {
  params?: {
    locale: string;
  };
  searchParams?: {
    type?: string;
  };
};

const components = {
  features: FeatureBlock,
  postblock: PostBlock,
  about: AboutBlock,
  faq: AccordionBlock,
};

export default async function Page({ params: { lang } }) {
  const data = await getPage(lang);

  const doc = data?.docs[0];
  console.log(doc, "____");

  return (
    <div>
      {/* <Hero
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
      /> */}

      {doc?.hero?.basic ? (
        <Hero
          tag={doc?.hero?.basic?.tag}
          title={doc?.hero?.basic?.title}
          payline={doc?.hero?.basic?.payoff}
        />
      ) : null}

      <div className="flex flex-wrap items-center justify-center gap-5 mt-2 md:justify-around">
        <div className="text-gray-400 dark:text-gray-400">
          <svg width="120" height="60" fill-rule="evenodd">
            <title>React</title>
            <g
              transform="matrix(.06928 0 0 .06928 7.367398 13.505331)"
              fill="none"
            >
              <circle
                r="50.167"
                cy="237.628"
                cx="269.529"
                fill="#00d8ff"
              ></circle>
              <g stroke="#00d8ff" stroke-width="24">
                <path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z"></path>
                <path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z"></path>
                <path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z"></path>
              </g>
            </g>
            <path
              d="M64.62 38.848l-4.26-6.436c2.153-.19 4.093-1.75 4.093-4.6 0-2.9-2.058-4.756-4.945-4.756h-6.34v15.78h1.964v-6.27h3.147l4.022 6.27zm-5.347-7.997h-4.14v-6.033h4.14c1.87 0 3.147 1.23 3.147 3.005s-1.278 3.03-3.147 3.03zm12.658 8.28c1.87 0 3.407-.615 4.543-1.75l-.852-1.16c-.9.923-2.224 1.443-3.525 1.443-2.46 0-3.975-1.798-4.117-3.95h9.25v-.45c0-3.43-2.035-6.128-5.49-6.128-3.265 0-5.63 2.674-5.63 5.986 0 3.573 2.437 6 5.82 6zm3.55-6.72h-7.5c.095-1.75 1.3-3.81 3.738-3.81 2.603 0 3.738 2.106 3.762 3.81zm13.534 6.436v-7.855c0-2.768-2.01-3.857-4.424-3.857-1.87 0-3.336.615-4.566 1.893l.828 1.23c1.017-1.088 2.13-1.585 3.502-1.585 1.656 0 2.887.875 2.887 2.413v2.058c-.923-1.065-2.224-1.562-3.786-1.562-1.94 0-4 1.207-4 3.762 0 2.484 2.058 3.786 4 3.786 1.538 0 2.84-.544 3.786-1.585v1.3zm-4.92-.994c-1.656 0-2.816-1.04-2.816-2.484 0-1.467 1.16-2.508 2.816-2.508 1.254 0 2.46.473 3.147 1.42v2.153c-.686.946-1.893 1.42-3.147 1.42zm13.5 1.278c2.082 0 3.312-.852 4.188-1.987l-1.183-1.088c-.757 1.017-1.727 1.49-2.9 1.49-2.437 0-3.95-1.893-3.95-4.424s1.514-4.4 3.95-4.4c1.183 0 2.153.45 2.9 1.49l1.183-1.088c-.875-1.136-2.106-1.987-4.188-1.987-3.407 0-5.702 2.603-5.702 5.986 0 3.407 2.295 6 5.702 6zm9.56 0c1.04 0 1.68-.308 2.13-.733l-.52-1.325c-.237.26-.7.473-1.207.473-.78 0-1.16-.615-1.16-1.467v-7.098h2.32V27.42h-2.32v-3.123h-1.775v3.123h-1.893v1.562h1.893v7.477c0 1.704.852 2.674 2.532 2.674z"
              fill="#00d8ff"
            ></path>
          </svg>
        </div>
        <div className="text-gray-400 dark:text-gray-400">
          <a href="/nextjs-templates">
            <span className="sr-only">Next.js Templates</span>
            <svg
              width="82"
              height="40"
              viewBox="0 0 148 90"
              className="text-black dark:text-white"
            >
              <title>Next.js</title>
              <path
                d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
            </svg>
          </a>
        </div>

        <div className="text-gray-400 dark:text-white">
          <a href="/tailwindcss-templates">
            <span className="sr-only">Tailwind CSS</span>
            <svg
              viewBox="0 0 248 31"
              className="w-auto h-5 text-slate-900 dark:text-white"
            >
              <title>Tailwind CSS</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                fill="#38bdf8"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
        <div className="text-black dark:text-white">
          <svg width="124" height="30" viewBox="0 0 124 30" fill="none">
            <title>Payload</title>
            <path
              d="M34.7441 23H37.2741V16.33H41.5981C44.7031 16.33 46.9801 14.904 46.9801 11.454C46.9801 8.004 44.7031 6.555 41.5981 6.555H34.7441V23ZM37.2741 14.145V8.74H41.4831C43.3921 8.74 44.3581 9.591 44.3581 11.454C44.3581 13.294 43.3921 14.145 41.4831 14.145H37.2741ZM51.3652 23.322C53.2742 23.322 54.6082 22.563 55.3672 21.344H55.4132C55.5512 22.678 56.1492 23.115 57.2762 23.115C57.6442 23.115 58.0352 23.069 58.4262 22.977V21.597C58.2882 21.62 58.2192 21.62 58.1502 21.62C57.7132 21.62 57.5982 21.183 57.5982 20.332V14.95C57.5982 11.914 55.6662 10.902 53.2512 10.902C49.6632 10.902 48.1912 12.673 48.0762 14.927H50.3762C50.4912 13.363 51.1122 12.719 53.1592 12.719C54.8842 12.719 55.3902 13.432 55.3902 14.283C55.3902 15.433 54.2632 15.663 52.4232 16.008C49.5022 16.56 47.5242 17.342 47.5242 19.964C47.5242 21.965 49.0192 23.322 51.3652 23.322ZM49.8702 19.803C49.8702 18.584 50.7442 18.009 52.8142 17.595C54.0102 17.342 55.0222 17.089 55.3902 16.744V18.423C55.3902 20.47 53.8952 21.505 51.8712 21.505C50.4682 21.505 49.8702 20.907 49.8702 19.803ZM61.4996 27.117C63.3166 27.117 64.4436 26.174 65.5706 23.276L70.2166 11.27H67.8476L64.6276 20.24H64.5816L61.1546 11.27H58.6936L63.4316 22.885C62.9716 24.725 61.9136 25.185 61.0166 25.185C60.6486 25.185 60.4416 25.162 60.0506 25.116V26.956C60.6486 27.071 60.9936 27.117 61.4996 27.117ZM71.5939 23H73.8479V6.555H71.5939V23ZM81.622 23.345C85.279 23.345 87.487 20.792 87.487 17.112C87.487 13.455 85.279 10.902 81.645 10.902C77.965 10.902 75.757 13.478 75.757 17.135C75.757 20.815 77.965 23.345 81.622 23.345ZM78.103 17.135C78.103 14.674 79.207 12.788 81.645 12.788C84.037 12.788 85.141 14.674 85.141 17.135C85.141 19.573 84.037 21.482 81.645 21.482C79.207 21.482 78.103 19.573 78.103 17.135ZM92.6484 23.322C94.5574 23.322 95.8914 22.563 96.6504 21.344H96.6964C96.8344 22.678 97.4324 23.115 98.5594 23.115C98.9274 23.115 99.3184 23.069 99.7094 22.977V21.597C99.5714 21.62 99.5024 21.62 99.4334 21.62C98.9964 21.62 98.8814 21.183 98.8814 20.332V14.95C98.8814 11.914 96.9494 10.902 94.5344 10.902C90.9464 10.902 89.4744 12.673 89.3594 14.927H91.6594C91.7744 13.363 92.3954 12.719 94.4424 12.719C96.1674 12.719 96.6734 13.432 96.6734 14.283C96.6734 15.433 95.5464 15.663 93.7064 16.008C90.7854 16.56 88.8074 17.342 88.8074 19.964C88.8074 21.965 90.3024 23.322 92.6484 23.322ZM91.1534 19.803C91.1534 18.584 92.0274 18.009 94.0974 17.595C95.2934 17.342 96.3054 17.089 96.6734 16.744V18.423C96.6734 20.47 95.1784 21.505 93.1544 21.505C91.7514 21.505 91.1534 20.907 91.1534 19.803ZM106.181 23.322C108.021 23.322 109.148 22.448 109.792 21.62H109.838V23H112.092V6.555H109.838V12.696H109.792C109.148 11.776 108.021 10.925 106.181 10.925C103.191 10.925 100.914 13.271 100.914 17.135C100.914 20.999 103.191 23.322 106.181 23.322ZM103.26 17.135C103.26 14.835 104.341 12.811 106.549 12.811C108.573 12.811 109.815 14.467 109.815 17.135C109.815 19.78 108.573 21.459 106.549 21.459C104.341 21.459 103.26 19.435 103.26 17.135Z"
              fill="currentColor"
            ></path>
            <g clip-path="url(#clip0_102_1302)">
              <g clip-path="url(#clip1_102_1302)">
                <path
                  d="M12.2462 2.33875L22.2869 8.83849V21.1755L14.7263 25.8858V13.5488L4.67358 7.05762L12.2462 2.33875Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M11.4765 25.2018V15.5748L3.8999 20.2937L11.4765 25.2018Z"
                  fill="currentColor"
                ></path>
              </g>
            </g>
            <path
              d="M120.441 6.30297C119.086 6.30297 117.998 7.30002 117.998 8.75976C117.998 10.2065 119.086 11.197 120.441 11.197C121.79 11.197 122.879 10.2065 122.879 8.75976C122.879 7.30002 121.79 6.30297 120.441 6.30297ZM120.441 10.7604C119.34 10.7604 118.48 9.95231 118.48 8.75976C118.48 7.54766 119.34 6.73959 120.441 6.73959C121.562 6.73959 122.396 7.54766 122.396 8.75976C122.396 9.95231 121.562 10.7604 120.441 10.7604ZM120.52 8.97481L121.047 9.96534H121.64L121.041 8.86402C121.367 8.72066 121.51 8.45999 121.51 8.17326C121.51 7.49552 121.054 7.36519 120.285 7.36519H119.49V9.96534H120.024V8.97481H120.52ZM120.37 7.78877C120.728 7.78877 120.976 7.86697 120.976 8.17977C120.976 8.43392 120.806 8.56426 120.402 8.56426H120.024V7.78877H120.37Z"
              fill="currentColor"
            ></path>
            <defs>
              <clipPath id="clip0_102_1302">
                <rect
                  width="26"
                  height="28"
                  fill="white"
                  transform="translate(0 0.685791)"
                ></rect>
              </clipPath>
              <clipPath id="clip1_102_1302">
                <rect
                  width="18.2"
                  height="25.2"
                  fill="white"
                  transform="translate(3.8999 0.685791)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="text-gray-400 dark:text-gray-400">
          <svg
            width="100"
            height="64"
            viewBox="0 0 284 65"
            fill="currentColor"
            className="text-black dark:text-white"
          >
            <title>Vercel</title>
            <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path>
          </svg>
        </div>
        {/* <div className="text-gray-400 dark:text-gray-400">
          <svg
            width="140"
            height="64"
            viewBox="0 0 800 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M213.12 126.652C206.293 126.652 199.723 125.735 193.408 123.9C187.093 122.065 181.845 119.527 177.664 116.284L184.064 102.076C192.768 108.135 202.539 111.164 213.376 111.164C219.008 111.164 223.339 110.247 226.368 108.412C229.397 106.577 230.912 104.039 230.912 100.796C230.912 97.8946 229.525 95.6332 226.752 94.0119C223.979 92.3906 219.051 90.8119 211.968 89.2759C204.032 87.6546 197.696 85.6919 192.96 83.3879C188.224 81.0839 184.768 78.2466 182.592 74.8759C180.416 71.5052 179.328 67.3453 179.328 62.3959C179.328 56.9346 180.843 52.0706 183.872 47.8039C186.901 43.5372 191.147 40.1879 196.608 37.7559C202.069 35.3239 208.384 34.1079 215.552 34.1079C221.952 34.1079 228.117 35.0466 234.048 36.9239C239.979 38.8013 244.693 41.3186 248.192 44.4759L241.792 58.6839C233.515 52.6252 224.811 49.5959 215.68 49.5959C210.475 49.5959 206.379 50.5986 203.392 52.6039C200.405 54.6093 198.912 57.3612 198.912 60.8599C198.912 62.9079 199.488 64.5932 200.64 65.9159C201.792 67.2386 203.712 68.4119 206.4 69.4359C209.088 70.4599 212.907 71.5266 217.856 72.6359C229.461 75.1959 237.803 78.4812 242.88 82.4919C247.957 86.5026 250.496 92.0492 250.496 99.1319C250.496 107.665 247.211 114.385 240.64 119.292C234.069 124.199 224.896 126.652 213.12 126.652ZM296.832 112.316C298.795 112.316 300.843 112.188 302.976 111.932L301.952 126.012C299.477 126.353 297.003 126.524 294.528 126.524C284.971 126.524 277.995 124.433 273.6 120.252C269.205 116.071 267.008 109.713 267.008 101.18V77.1159H255.104V62.6519H267.008V44.2199H286.336V62.6519H302.08V77.1159H286.336V101.052C286.336 108.561 289.835 112.316 296.832 112.316ZM341.76 126.524C335.104 126.524 329.259 125.18 324.224 122.492C319.189 119.804 315.307 116.007 312.576 111.1C309.845 106.193 308.48 100.412 308.48 93.7559C308.48 87.0999 309.845 81.3186 312.576 76.4119C315.307 71.5052 319.189 67.7293 324.224 65.0839C329.259 62.4386 335.104 61.1159 341.76 61.1159C348.416 61.1159 354.261 62.4386 359.296 65.0839C364.331 67.7293 368.213 71.5052 370.944 76.4119C373.675 81.3186 375.04 87.0999 375.04 93.7559C375.04 100.412 373.675 106.193 370.944 111.1C368.213 116.007 364.331 119.804 359.296 122.492C354.261 125.18 348.416 126.524 341.76 126.524ZM341.76 111.804C351.147 111.804 355.84 105.788 355.84 93.7559C355.84 87.6972 354.624 83.1746 352.192 80.1879C349.76 77.2012 346.283 75.7079 341.76 75.7079C332.373 75.7079 327.68 81.7239 327.68 93.7559C327.68 105.788 332.373 111.804 341.76 111.804ZM428.544 76.9879L417.664 78.1399C412.288 78.6519 408.491 80.1666 406.272 82.6839C404.053 85.2013 402.944 88.5506 402.944 92.7319V125.5H383.616V62.6519H402.176V73.2759C405.333 66.0225 411.861 62.0546 421.76 61.3719L427.392 60.9879L428.544 76.9879ZM484.704 62.7799H503.648L465.76 148.54H446.176L458.208 122.044L432.352 62.7799H452.448L468.32 102.716L484.704 62.7799ZM548.448 61.1159C553.909 61.1159 558.731 62.4386 562.912 65.0839C567.093 67.7293 570.357 71.5052 572.704 76.4119C575.051 81.3186 576.224 87.0145 576.224 93.4999C576.224 99.9853 575.051 105.724 572.704 110.716C570.357 115.708 567.072 119.591 562.848 122.364C558.624 125.137 553.824 126.524 548.448 126.524C544.096 126.524 540.171 125.607 536.672 123.772C533.173 121.937 530.485 119.399 528.608 116.156V125.5H509.536V35.2599H528.864V71.0999C530.741 67.9426 533.408 65.4892 536.864 63.7399C540.32 61.9906 544.181 61.1159 548.448 61.1159ZM542.816 111.804C547.339 111.804 550.837 110.204 553.312 107.004C555.787 103.804 557.024 99.3026 557.024 93.4999C557.024 87.7825 555.787 83.4093 553.312 80.3799C550.837 77.3506 547.339 75.8359 542.816 75.8359C538.293 75.8359 534.795 77.3932 532.32 80.5079C529.845 83.6226 528.608 88.0385 528.608 93.7559C528.608 99.5586 529.845 104.017 532.32 107.132C534.795 110.247 538.293 111.804 542.816 111.804ZM618.208 126.524C611.552 126.524 605.707 125.18 600.672 122.492C595.637 119.804 591.755 116.007 589.024 111.1C586.293 106.193 584.928 100.412 584.928 93.7559C584.928 87.0999 586.293 81.3186 589.024 76.4119C591.755 71.5052 595.637 67.7293 600.672 65.0839C605.707 62.4386 611.552 61.1159 618.208 61.1159C624.864 61.1159 630.709 62.4386 635.744 65.0839C640.779 67.7293 644.661 71.5052 647.392 76.4119C650.123 81.3186 651.488 87.0999 651.488 93.7559C651.488 100.412 650.123 106.193 647.392 111.1C644.661 116.007 640.779 119.804 635.744 122.492C630.709 125.18 624.864 126.524 618.208 126.524ZM618.208 111.804C627.595 111.804 632.288 105.788 632.288 93.7559C632.288 87.6972 631.072 83.1746 628.64 80.1879C626.208 77.2012 622.731 75.7079 618.208 75.7079C608.821 75.7079 604.128 81.7239 604.128 93.7559C604.128 105.788 608.821 111.804 618.208 111.804ZM690.272 126.524C683.616 126.524 677.771 125.18 672.736 122.492C667.701 119.804 663.819 116.007 661.088 111.1C658.357 106.193 656.992 100.412 656.992 93.7559C656.992 87.0999 658.357 81.3186 661.088 76.4119C663.819 71.5052 667.701 67.7293 672.736 65.0839C677.771 62.4386 683.616 61.1159 690.272 61.1159C696.928 61.1159 702.773 62.4386 707.808 65.0839C712.843 67.7293 716.725 71.5052 719.456 76.4119C722.187 81.3186 723.552 87.0999 723.552 93.7559C723.552 100.412 722.187 106.193 719.456 111.1C716.725 116.007 712.843 119.804 707.808 122.492C702.773 125.18 696.928 126.524 690.272 126.524ZM690.272 111.804C699.659 111.804 704.352 105.788 704.352 93.7559C704.352 87.6972 703.136 83.1746 700.704 80.1879C698.272 77.2012 694.795 75.7079 690.272 75.7079C680.885 75.7079 676.192 81.7239 676.192 93.7559C676.192 105.788 680.885 111.804 690.272 111.804ZM800 125.5H776.32L752.256 97.4679V125.5H732.928V35.2599H752.256V89.5319L775.424 62.7799H798.464L772.096 92.7319L800 125.5Z"
              fill="#333333"
            />
            <path
              d="M4.96223 147.435L0.00576076 15.3671C-0.157932 11.0055 3.18644 7.309 7.54269 7.03673L119.875 0.0159388C124.31 -0.261195 128.129 3.10872 128.406 7.54286C128.416 7.70992 128.422 7.87727 128.422 8.04465V151.956C128.422 156.398 124.82 160 120.377 160C120.257 160 120.137 159.997 120.016 159.992L12.64 155.169C8.45814 154.981 5.11923 151.618 4.96223 147.435Z"
              fill="#FF4785"
            />
            <mask
              id="mask0_817_151"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="129"
              height="160"
            >
              <path
                d="M4.96223 147.435L0.00576076 15.3671C-0.157932 11.0055 3.18644 7.309 7.54269 7.03673L119.875 0.0159388C124.31 -0.261195 128.129 3.10872 128.406 7.54286C128.416 7.70992 128.422 7.87727 128.422 8.04465V151.956C128.422 156.398 124.82 160 120.377 160C120.257 160 120.137 159.997 120.016 159.992L12.64 155.169C8.45814 154.981 5.11923 151.618 4.96223 147.435Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_817_151)">
              <path
                d="M94.8298 19.6665L95.5971 1.21209L111.024 0L111.688 19.0314C111.711 19.6938 111.193 20.2495 110.531 20.2726C110.247 20.2825 109.969 20.1916 109.746 20.016L103.797 15.3295L96.754 20.6725C96.226 21.073 95.4732 20.9696 95.0727 20.4416C94.9041 20.2194 94.8182 19.9453 94.8298 19.6665ZM75.1006 60.3062C75.1006 63.4359 96.182 61.9359 99.012 59.7375C99.012 38.4248 87.5761 27.2252 66.635 27.2252C45.6939 27.2252 33.961 38.599 33.961 55.6597C33.961 85.3736 74.0609 85.9423 74.0609 102.15C74.0609 106.699 71.8332 109.401 66.9321 109.401C60.5458 109.401 58.021 106.139 58.318 95.0498C58.318 92.6441 33.961 91.8941 33.2184 95.0498C31.3274 121.923 48.0702 129.675 67.2291 129.675C85.7939 129.675 100.349 119.779 100.349 101.866C100.349 70.019 59.6547 70.8721 59.6547 55.091C59.6547 48.6932 64.4072 47.8402 67.2291 47.8402C70.1995 47.8402 75.5461 48.3637 75.1006 60.3062Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
        <div className="text-gray-400 dark:text-gray-400">
          <div>
            <svg
              width="142"
              height="39"
              viewBox="0 0 142 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_817_174)">
                <path
                  d="M12.0068 30.8287C17.3025 30.8287 21.5955 26.5356 21.5955 21.2399C21.5955 15.9442 17.3025 11.6511 12.0068 11.6511C6.71101 11.6511 2.41797 15.9442 2.41797 21.2399C2.41797 26.5356 6.71101 30.8287 12.0068 30.8287Z"
                  fill="white"
                  stroke="black"
                  stroke-width="1.1215"
                  stroke-miterlimit="10"
                />
                <path
                  d="M23.1589 18.6106H0.857383C0.634304 18.6106 0.420361 18.6992 0.26262 18.857C0.10488 19.0147 0.0162617 19.2286 0.0162617 19.4517V20.3097C0.00672897 20.511 0 20.7084 0 20.9097C0 27.5371 5.37252 32.9097 12 32.9097C18.5271 32.9097 23.8374 27.6981 23.9961 21.2085C23.9961 21.1839 24 21.1592 24 21.134V19.4517C24 19.2286 23.9114 19.0147 23.7536 18.857C23.5959 18.6992 23.382 18.6106 23.1589 18.6106Z"
                  fill="black"
                />
              </g>
              <path
                d="M49.125 23.5682V13.5455H53.9659V31H49.3182V27.8295H49.1364C48.7424 28.8523 48.0871 29.6742 47.1705 30.2955C46.2614 30.9167 45.1515 31.2273 43.8409 31.2273C42.6742 31.2273 41.6477 30.9621 40.7614 30.4318C39.875 29.9015 39.1818 29.1477 38.6818 28.1705C38.1894 27.1932 37.9394 26.0227 37.9318 24.6591V13.5455H42.7727V23.7955C42.7803 24.8258 43.0568 25.6402 43.6023 26.2386C44.1477 26.8371 44.8788 27.1364 45.7955 27.1364C46.3788 27.1364 46.9242 27.0038 47.4318 26.7386C47.9394 26.4659 48.3485 26.0644 48.6591 25.5341C48.9773 25.0038 49.1326 24.3485 49.125 23.5682ZM57.8381 31V13.5455H62.4517V16.625H62.6562C63.0199 15.6023 63.6259 14.7955 64.4744 14.2045C65.3229 13.6136 66.3381 13.3182 67.5199 13.3182C68.7169 13.3182 69.7358 13.6174 70.5767 14.2159C71.4176 14.8068 71.9782 15.6098 72.2585 16.625H72.4403C72.7964 15.625 73.4403 14.8258 74.3722 14.2273C75.3116 13.6212 76.4214 13.3182 77.7017 13.3182C79.3305 13.3182 80.6525 13.8371 81.6676 14.875C82.6903 15.9053 83.2017 17.3674 83.2017 19.2614V31H78.3722V20.2159C78.3722 19.2462 78.1146 18.5189 77.5994 18.0341C77.0843 17.5492 76.4403 17.3068 75.6676 17.3068C74.7888 17.3068 74.1032 17.5871 73.6108 18.1477C73.1184 18.7008 72.8722 19.4318 72.8722 20.3409V31H68.179V20.1136C68.179 19.2576 67.9328 18.5758 67.4403 18.0682C66.9555 17.5606 66.3153 17.3068 65.5199 17.3068C64.982 17.3068 64.4972 17.4432 64.0653 17.7159C63.6411 17.9811 63.304 18.3561 63.054 18.8409C62.804 19.3182 62.679 19.8788 62.679 20.5227V31H57.8381ZM92.0028 31.3295C90.8892 31.3295 89.8968 31.1364 89.0256 30.75C88.1544 30.3561 87.465 29.7765 86.9574 29.0114C86.4574 28.2386 86.2074 27.2765 86.2074 26.125C86.2074 25.1553 86.3854 24.3409 86.7415 23.6818C87.0975 23.0227 87.5824 22.4924 88.196 22.0909C88.8097 21.6894 89.5066 21.3864 90.2869 21.1818C91.0748 20.9773 91.9006 20.8333 92.7642 20.75C93.7794 20.6439 94.5975 20.5455 95.2188 20.4545C95.84 20.3561 96.2907 20.2121 96.571 20.0227C96.8513 19.8333 96.9915 19.553 96.9915 19.1818V19.1136C96.9915 18.3939 96.7642 17.8371 96.3097 17.4432C95.8627 17.0492 95.2263 16.8523 94.4006 16.8523C93.5294 16.8523 92.8362 17.0455 92.321 17.4318C91.8059 17.8106 91.465 18.2879 91.2983 18.8636L86.821 18.5C87.0483 17.4394 87.4953 16.5227 88.1619 15.75C88.8286 14.9697 89.6884 14.3712 90.7415 13.9545C91.8021 13.5303 93.0294 13.3182 94.4233 13.3182C95.393 13.3182 96.321 13.4318 97.2074 13.6591C98.1013 13.8864 98.893 14.2386 99.5824 14.7159C100.279 15.1932 100.829 15.8068 101.23 16.5568C101.632 17.2992 101.832 18.1894 101.832 19.2273V31H97.2415V28.5795H97.1051C96.8248 29.125 96.4498 29.6061 95.9801 30.0227C95.5104 30.4318 94.946 30.7538 94.2869 30.9886C93.6278 31.2159 92.8665 31.3295 92.0028 31.3295ZM93.3892 27.9886C94.1013 27.9886 94.7301 27.8485 95.2756 27.5682C95.821 27.2803 96.2491 26.8939 96.5597 26.4091C96.8703 25.9242 97.0256 25.375 97.0256 24.7614V22.9091C96.8741 23.0076 96.6657 23.0985 96.4006 23.1818C96.143 23.2576 95.8513 23.3295 95.5256 23.3977C95.1998 23.4583 94.8741 23.5152 94.5483 23.5682C94.2225 23.6136 93.9271 23.6553 93.6619 23.6932C93.0938 23.7765 92.5975 23.9091 92.1733 24.0909C91.7491 24.2727 91.4195 24.5189 91.1847 24.8295C90.9498 25.1326 90.8324 25.5114 90.8324 25.9659C90.8324 26.625 91.071 27.1288 91.5483 27.4773C92.0331 27.8182 92.6468 27.9886 93.3892 27.9886ZM105.588 31V13.5455H110.202V16.625H110.406C110.77 15.6023 111.376 14.7955 112.224 14.2045C113.073 13.6136 114.088 13.3182 115.27 13.3182C116.467 13.3182 117.486 13.6174 118.327 14.2159C119.168 14.8068 119.728 15.6098 120.009 16.625H120.19C120.546 15.625 121.19 14.8258 122.122 14.2273C123.062 13.6212 124.171 13.3182 125.452 13.3182C127.08 13.3182 128.402 13.8371 129.418 14.875C130.44 15.9053 130.952 17.3674 130.952 19.2614V31H126.122V20.2159C126.122 19.2462 125.865 18.5189 125.349 18.0341C124.834 17.5492 124.19 17.3068 123.418 17.3068C122.539 17.3068 121.853 17.5871 121.361 18.1477C120.868 18.7008 120.622 19.4318 120.622 20.3409V31H115.929V20.1136C115.929 19.2576 115.683 18.5758 115.19 18.0682C114.705 17.5606 114.065 17.3068 113.27 17.3068C112.732 17.3068 112.247 17.4432 111.815 17.7159C111.391 17.9811 111.054 18.3561 110.804 18.8409C110.554 19.3182 110.429 19.8788 110.429 20.5227V31H105.588ZM134.776 31V13.5455H139.616V31H134.776ZM137.207 11.2955C136.488 11.2955 135.87 11.0568 135.355 10.5795C134.848 10.0947 134.594 9.51515 134.594 8.84091C134.594 8.17424 134.848 7.60227 135.355 7.125C135.87 6.64015 136.488 6.39773 137.207 6.39773C137.927 6.39773 138.541 6.64015 139.048 7.125C139.563 7.60227 139.821 8.17424 139.821 8.84091C139.821 9.51515 139.563 10.0947 139.048 10.5795C138.541 11.0568 137.927 11.2955 137.207 11.2955Z"
                fill="black"
              />
              <defs>
                <clipPath id="clip0_817_174">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 10)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div> */}
      </div>

      {doc?.layout?.map((feature) =>
        components[feature?.blockType]
          ? React.createElement(components[feature?.blockType], {
              locale: lang,
              ...feature,
            })
          : null
      )}
    </div>
  );
}
