import vector from "../../assets/img/Hero/vector.png"

export default function Hero() {
  return (
    <section className="bg-base-image flex items-center bg-no-repeat bg-center bg-cover h-[350px] lg:h-[400px]">
      <div className="text-white flex flex-col gap-10 mx-6 my-auto md:ml-8 md:w-[557px] xl:ml-[352px]" >
        <div className="flex gap-3 items-center">
          <img src={vector} alt="Ícone do Jordan" className="size-6" />
          <h1 className="font-medium text-lg xl:text-2xl">JordanShoes</h1>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-medium text-2xl xl:text-4xl">A melhor loja de Jordan</h2>
          <p className="font-normal text-base md:text-lg xl:text-2xl">O tênis Jordan é fruto de uma velha e forte
            parceria entre a Nike e o jogador Michael Jordan.</p>
        </div>
      </div>
    </section>
  )
}

