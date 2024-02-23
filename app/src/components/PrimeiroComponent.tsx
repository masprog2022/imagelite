"use client";

interface PrimeiroComponentProps {
  message: string;
}

export const PrimeiroComponent: React.FC<PrimeiroComponentProps> = (
  props: PrimeiroComponentProps
) => {
  function handleClick() {
    console.log("Clicaste e mim");
  }

  return (
    <>
      {props.message}
      <button onClick={handleClick}>Clica aqui</button>
    </>
  );
};
