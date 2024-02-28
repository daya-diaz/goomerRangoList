import foodImg from '../assets/foodImg.png'

interface FoodCardProps {
  name: string,
  description: string,
  value: string,
  pic: string,
  id: string,
}
export default function FoodCard({ name, description, value, id }: FoodCardProps){
    return(
        <li id={id} className='flex roundend-lg w-[386px] gap-4 shadow-customHeader'>
          <img src={foodImg} alt="Foto do prato" />
          <div className='flex flex-col gap-2 items-start justify-center'>
            <h3 className='text-colorText font-medium text-right'>{name}</h3>
            <p className='text-colorText text-xs font-medium'>{description}</p>
            <span className='text-primary font-medium'>{value} <span className='text-gray500 text-xs line-through'>{value}</span></span>
          </div>
        </li>
    )
}