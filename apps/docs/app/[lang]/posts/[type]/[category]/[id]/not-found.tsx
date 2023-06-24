import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

// import { Header } from '@kobalt/ui/typography';
// import { Section } from '@kobalt/ui/sections';

export default function NotFound() {
  return (
    <div className=" z-10 w-screen">
      {/* <Section className="relative grid w-full max-w-screen-xl px-4 dark:bg-gray-900 sm:px-6 md:min-h-[calc(100vh-72px)] md:grid-cols-12 md:gap-8 md:px-8 xl:gap-0"> */}
      <div className="col-span-2"></div>
      <div className="mx-8 place-self-center py-8 pr-4 text-center md:col-span-8 md:py-16">
        {/* <Header type="h5">404</Header> */}
        <h1 className="mb-8 max-w-2xl text-4xl font-extrabold  tracking-tight md:text-5xl xl:text-5xl  xl:leading-[3.5rem]">
          Deze pagina bestaat (niet) meer
        </h1>

        <h2 className="dark: my-4 text-xl font-bold  leading-normal">
          <span className="font-light">
            Voor een vast bedrag per maand kun je altijd maatwerk verwachten en
            ben je zorgeloos online (inclusief hosting en domeinnaam). Tevens is
            je website maandelijks opzegbaar.
          </span>
        </h2>

        <Link
          href="/"
          className={clsx("btn-primary btn mt-8")}
          data-umami-event="hero-button-clicked"
        >
          Naar home
        </Link>
      </div>

      <div className="col-span-2 self-center"></div>
      {/* </Section> */}
    </div>
  )
}
