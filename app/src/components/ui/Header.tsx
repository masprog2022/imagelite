import { useAuth } from "@/resources";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RenderIf } from "./RenderIf";

export const Header: React.FC = () => {
  const auth = useAuth();
  const user = auth.getUserSession();
  const router = useRouter();

  function logout() {
    auth.invalidateSession();
    router.push("/login");
  }

  return (
    <header className="py-3 text-white bg-indigo-950">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <Link href="/gallery">
          <h1 className="text-3xl font-bold">ImageLite</h1>
        </Link>
        <RenderIf condition={!!user}>
          <div className="flex items-center">
            <div className="relative">
              <span className="w-64 px-6 py-3 text-md">Olá, {user?.name}</span>
              <span className="w-64 px-6 py-3 text-sm">
                <a href="#" onClick={logout}>
                  Sair
                </a>
              </span>
            </div>
          </div>
        </RenderIf>
      </div>
    </header>
  );
};
