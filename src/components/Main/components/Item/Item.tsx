
interface ItemProps {
  imgSrc: string,
  imgAlt: string,
  title: string,
  brand: string,
  price: number
}


export default function Item(props: ItemProps) {
  return (
    <div>
      <div className="bg-base-white flex justify-center px-12 py-8 mb-6" >
        <img src={props.imgSrc} alt={props.imgAlt} width={225} height={135} />
      </div>
      <h3 className="font-medium text-base md:text-lg mb-3">{props.title}</h3>
      <span className="text-[#7ca2f4] font-medium text-base">{props.brand}</span>
      <p className="text-[#121214] font-medium text-xl mt-6">R$: {props.price},00</p>
    </div>
  )
}
