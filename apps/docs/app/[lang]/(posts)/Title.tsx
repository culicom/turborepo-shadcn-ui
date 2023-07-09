import { H1, H4, P } from "ui/typography";

type TitleProps = {
  type: string;
  title?: string;
  description?: string;
};

export function Title({ type, title, description }: TitleProps) {
  return (
    <div className="sm:mt-0 sm:mb-0 sm:py-0 sm:pb-0 sm:pt-12">
      <div className="flex md:justify-center">
        <div className="flex max-w-3xl flex-col md:mx-auto md:items-center md:text-center">
          <H4> {type}</H4>
          {title ? <H1 className="md:pb-4">{title}</H1> : null}
          {description ? (
            <P className="text-lg text-muted-foreground">{description}</P>
          ) : null}
        </div>
      </div>
    </div>
  );
}
