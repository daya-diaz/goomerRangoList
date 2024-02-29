import { useParams } from 'react-router-dom';
import { RESTAURANTS } from '../utils/data';
import img from '../assets/restaurantImg.png';
import SearchIcon from '../assets/search.svg'
import { Header } from '../components/Header';
import arrow from '../assets/arrowDown.png'
import FoodCard from '../components/FoodCard';

export default function RestaurantDetails() {
  const { id } = useParams<{ id: string }>();
  const restaurant = RESTAURANTS.find(restaurant => restaurant.id === id);
  console.log(restaurant?.foodsList[0].foodImg)


  return (
    <div className='flex flex-col w-full h-full'>
      <Header />
      <div className='flex h-screen'>
        <div className='w-[75%] flex flex-col pl-20 gap-6 bg-white'>
          <div>
            <div className='flex items-center justify-between w-[695px]'>
              <img src={img} alt="Imagem do Restaurante" />
              <div className='flex flex-col gap-2'>
                <h1 className='font-medium text-colorText text-2xl'>{restaurant?.name}</h1>
                <p className='text-colorText'>{restaurant?.description}</p>
                <div className='flex flex-col gap-1'>
                  {/* Formatando os horários de abertura e fechamento para cada dia */}
                  {Object.entries(restaurant?.openingHours ?? {}).map(([dayType, hours]) => (
                    <p key={dayType} className='text-xs text-colorText'>
                      {hours.map(({ day, opensAt, closesAt }) => (
                        <span key={day}>
                          {day}: <b>{opensAt} às {closesAt}</b>
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <form className="relative w-[300px] md:w-[50%] lg:w-[75%]">
              <input
                className="w-full min-w-80 px-10 py-3 shadow-custom rounded-full outline-none max-h-12 focus:border-2 focus:border-primary placeholder:text-colorText placeholder:font-medium"
                type="text"
                placeholder="Buscar no cardápio"
              />
              <img
                className="absolute right-10 top-4 h-4 w-4 text-gray-400"
                src={SearchIcon}
                alt="Icone de Lupa"
              />
            </form>
          </div>
          {/*Lógica para se o restaurante não tiver algum determinado tipo de comida, o details não renderizar*/}
          {restaurant?.foodsList.some(food => food.type === 'lunch') && (
            <details>
              <summary className='flex items-center justify-between w-[300px] md:w-[50%] lg:w-[75%] p-3 border-b-2 border-colorText'>
                <span className='text-colorText font-semibold'>Almoços</span>
                <img className='w-4 h-[9px]' src={arrow} />
              </summary>
              <ul className='flex flex-wrap pt-6 justify-between gap-5 w-[300px] md:w-[50%] lg:w-[75%]'>
                {
                  restaurant?.foodsList.map(food => {
                    if (food.type === 'lunch') {
                      return <FoodCard key={food.id} id={food.id} name={food.name} description={food.description} value={food.value} pic={food.foodImg} />
                    } else {
                      return
                    }
                  })
                }
              </ul>
            </details>
          )}

          {restaurant?.foodsList.some(food => food.type === 'drink') && (
              <details>
                <summary className='flex items-center justify-between w-[300px] md:w-[50%] lg:w-[75%] p-3 border-b-2 border-colorText'>
                  <span className='text-colorText font-semibold'>Bebidas</span>
                  <img className='w-4 h-[9px]' src={arrow} />
                </summary>
                <ul className='flex flex-wrap pt-6 justify-between gap-5 w-[300px] md:w-[50%] lg:w-[75%]'>
                  {
                    restaurant?.foodsList.map(food => {
                      if (food.type === 'drink') {
                        return <FoodCard key={food.id} id={food.id} name={food.name} description={food.description} value={food.value} pic={food.foodImg} />
                      } else {
                        return
                      }
                    })
                  }
                </ul>
              </details>
          )}

          {restaurant?.foodsList.some(food => food.type === 'dessert') && (
            <details>
              <summary className='flex items-center justify-between w-[300px] md:w-[50%] lg:w-[75%] p-3 border-b-2 border-colorText'>
                <span className='text-colorText font-semibold'>Sobremesas</span>
                <img className='w-4 h-[9px]' src={arrow} />
              </summary>
              <ul className='flex flex-wrap pt-6 justify-between gap-5 w-[300px] md:w-[50%] lg:w-[75%]'>
                {
                  restaurant?.foodsList.map(food => {
                    if (food.type === 'dessert') {
                      return <FoodCard key={food.id} id={food.id} name={food.name} description={food.description} value={food.value} pic={food.foodImg} />
                    } else {
                      return null;
                    }
                  })
                }
              </ul>
            </details>
          )}

        </div>
        <div className='w-[25%] bg-bg'></div>
      </div>
    </div>
  );
}
