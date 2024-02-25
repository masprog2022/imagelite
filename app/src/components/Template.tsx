import { Footer } from "./ui/Footer";
import { Header } from "./ui/Header";
import { Loading } from "./ui/Loading";
import { RenderIf } from "./ui/RenderIf";

interface TemplateProps {
  children: React.ReactNode;
  loading?: boolean;
}

export const Template: React.FC<TemplateProps> = ({
  children,
  loading = false,
}: TemplateProps) => {
  return (
    <>
      <Header />
      <div
        className={`${
          loading ? "animate-pulse" : ""
        } container px-4 mx-auto mt-8`}
      >
        <RenderIf condition={loading}>
          <div className="text-center">
            <Loading />
          </div>
        </RenderIf>

        {children}
      </div>
      <Footer />
    </>
  );
};
