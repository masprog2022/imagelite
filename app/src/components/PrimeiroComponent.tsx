"use client";
export function PrimeiroComponent() {
  function handleClick() {
    console.log("Clicaste e mim");
  }

  return (
    <>
      <h1>Primeiro Componente</h1>
      <button onClick={handleClick}>Clica aqui</button>
    </>
  );
}
