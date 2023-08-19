import { cn } from "lib";
import { H1, H4, P } from "ui/typography";

type TitleProps = {
  type: string;
  title?: string;
  description?: string;
};

export function Title({ type, title, description }: TitleProps) {
  return (
    <section
      className={cn(
        "my-16 md:my-36 gap-y-6 space-y-8 md:container md:py-16 md:text-center",
        {
          "md:mb-0 md:mt-36 md:pt-16 md:pb-0": title === undefined,
        }
      )}
    >
      <div className="flex max-w-3xl flex-col md:mx-auto md:items-center md:text-center">
        <div className="flex max-w-3xl flex-col md:mx-auto md:items-center md:text-center">
          <H4> {type}</H4>
          {title ? <H1 className="md:pb-4">{title}</H1> : null}
          {description ? (
            <P className="text-lg text-muted-foreground">{description}</P>
          ) : null}
        </div>
      </div>
    </section>
  );
}
