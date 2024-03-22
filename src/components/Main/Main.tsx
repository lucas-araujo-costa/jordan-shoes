import Item from './components/Item/Item'
import img1 from '../../assets/img/Main/air-jordan-1.png'
import img2 from '../../assets/img/Main/air-jordan-2.png'
import img3 from '../../assets/img/Main/air-jordan-3.png'
import img4 from '../../assets/img/Main/air-jordan-4.png'
import img5 from '../../assets/img/Main/air-jordan-5.png'
import img6 from '../../assets/img/Main/air-jordan-6.png'

export default function Main() {
  return (
    <main className='flex flex-col items-center my-14 mx-8 gap-10'>
      <div className='flex flex-col items-center gap-3 xl:gap-6'>
        <h2 className='text-center font-semibold text-xl md:text-2xl xl:text-4xl '>Os melhores em só lugar</h2>
        <p className='text-center text-sm md:text-base xl:text-2xl '>A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.</p>
      </div>
      <div className='grid gap-8 md:gap-10 md:grid-cols-2 xl:grid-cols-3'>
        <Item imgSrc={img1} imgAlt='Air Jordan 1' title='Air Jordan 1 Mid Dutch Green' brand='Tênis Air Jordan' price={1.199} />
        <Item imgSrc={img2} imgAlt='Air Jordan 2' title='Air Jordan 1 High Zoom CMFT Tropical Twist' brand='' price={1.049} />
        <Item imgSrc={img3} imgAlt='Air Jordan 3' title='Air Jordan 1 Mid Dutch Green' brand='Tênis Air Jordan' price={1.349} />
        <Item imgSrc={img4} imgAlt='Air Jordan 4' title='Air Jordan 1 Mid GS "Light Smoke Grey"' brand='Tênis Air Jordan' price={1.585} />
        <Item imgSrc={img5} imgAlt='Air Jordan 5' title='Air Jordan 1 Mid SE Bright Citrus' brand='Tênis Air Jordan' price={949} />
        <Item imgSrc={img6} imgAlt='Air Jordan 6' title='Air Jordan 1 Mid Grey Camo' brand='Tênis Air Jordan' price={999} />
      </div>
    </main>
  )
}
