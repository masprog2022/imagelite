import { Footer } from "./ui/Footer";
import { Header } from "./ui/Header";

interface TemplateProps {
  children: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
  return (
    <>
      <Header />
      <div className="container px-4 mx-auto mt-8">{props.children}</div>
      <Footer />
    </>
  );
};
