import foodImg from '../assets/foodImg.png'

interface FoodCardProps {
  name: string,
  description: string,
  value: string,
  pic: string,
  id: string,
  inPromotion: boolean,
  valueWDiscount: string,
  onClick: () => void,

}
export default function FoodCard({ name, description, value, id, inPromotion, valueWDiscount, onClick }: FoodCardProps){ 
  const handleClick = () => {
    onClick();
  }
    return(
        <li id={id} className='flex roundend-lg w-full cursor-pointer gap-4 shadow-customHeader lg:w-[383px]' onClick={handleClick}>
          <img src={foodImg} alt="Foto do prato" />
          <div className='flex flex-col gap-2 items-start justify-center'>
            <h3 className='text-colorText font-medium text-left'>{name}</h3>
            <p className='text-colorText text-xs font-medium max-w-[250px]'>{description}</p>
              {
                inPromotion ? (
                  <span className='text-primary font-medium'>{valueWDiscount} <span className='text-gray500 text-xs line-through'>{value}</span></span>
                ) : (
                  <span className='text-primary font-medium'>{value}</span>
                )
              }
          </div>
        </li>
    )
}