import { PrimeiroComponent } from "@/components/PrimeiroComponent";

export default function Home() {
  return (
    <main>
      <div>Hello World!</div>
      <PrimeiroComponent message="Olá, esta messagem estou passando como parametro" />
    </main>
  );
}
