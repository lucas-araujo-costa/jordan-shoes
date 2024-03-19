import vector from "../../assets/img/Hero/vector.png"

export default function Hero() {
  return (
    <section className="bg-base-image h-96 flex items-center bg-no-repeat">
      <div className="text-white ml-80 flex flex-col gap-10 w-[34.8125rem]">
        <div className="flex gap-3 items-center">
          <img src={vector} alt="Ícone do Jordan" />
          <h1 className="text-2xl font-medium">JordanShoes</h1>
        </div>
        <div className="flex flex-col gap-5 ">
          <h2 className="text-4xl font-medium">A melhor loja de Jordan</h2>
          <p className="text-2xl font-normal">O tênis Jordan é fruto de uma velha e forte
            parceria entre a Nike e o jogador Michael Jordan.</p>
        </div>
      </div>
    </section>
  )
}

