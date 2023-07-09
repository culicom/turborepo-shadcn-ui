import { Title } from "./Title";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children, ...props }: RootLayoutProps) {
  console.log(props);
  return (
    <>
      <Title />
      {children}
    </>
  );
}
