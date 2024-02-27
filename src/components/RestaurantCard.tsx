import RestaurantImg from '../assets/restaurantImg.png'

import {RESTAURANTS} from '../utils/products';

interface RestaurantCardProps {
  id: string
  name: string,
  address: string,
  hour: number,
  minute: number,
}

export default function RestaurantCard({id, name, address, hour}: RestaurantCardProps){
  console.log(RESTAURANTS)
  const restaurantId = id;
    // const userHour = hour;
    // const userMinute = minute;

  const restaurant = RESTAURANTS.find(restaurant => restaurant.id === restaurantId);

  const isOpen = restaurant!.opensAt < hour;
  const tagClass = isOpen ? 'bg-secondary' : 'bg-wistful';

  console.log(isOpen)
    return(
        <div className='relative w-80 lg:w-[22.8rem] shadow-custom'>
          <div className='w-full flex items-center gap-6'>
            <img className='w-[35%]' src={RestaurantImg} alt="Imagem de perfil do restaurante" />
            <div className='w-[65%] flex flex-col gap-[2px] items-start'>
              <h3 className='text-colorText font-medium'>{name}</h3>
              <p className='text-colorText text-xs'>{address}</p>
            </div>
          </div>
          <div className={`absolute right-[-5%] top-[-15%] flex items-center justify-center shadow-customTag h-12 w-12 rounded-full ${tagClass} text-white`}>
            <span className='text-center text-[8px] font-bold'>{isOpen ? `Aberto\nagora` : 'fechado\nagora'}</span>
          </div>
        </div>
    )
}