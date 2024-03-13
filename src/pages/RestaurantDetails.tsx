import { useParams } from 'react-router-dom';
import { RESTAURANTS } from '../utils/data';
import img from '../assets/restaurantImg.png';
import SearchIcon from '../assets/search.svg'
import { Header } from '../components/Header/Header';
import { ChangeEvent, useState } from 'react';
import FoodDetails from '../components/FoodDetails/FoodDetails';
import { Food } from '../types/types';

export default function RestaurantDetails() {
  const [search, setSearch] = useState('');

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setSearch(query);
  }
  const { id } = useParams<{ id: string }>();
  const restaurant = RESTAURANTS.find(restaurant => restaurant.id === id);
  const foodRestaurant = restaurant?.foodsList;

  const filteredFoods = search !== ''
    ? foodRestaurant?.filter(food => food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : foodRestaurant;
  console.log(foodRestaurant)
  return (
    <div className='flex relative flex-col w-full h-full'>
      <Header />
      <div className='flex h-screen'>
        <div className='w-full flex flex-col p-6 gap-6 parent-div bg-white pb-8 mb-16 lg:w-[75%] lg:pl-20'>
          <div className='w-full'>
            <div className='flex flex-col items-center justify-between w-full lg:w-[695px] lg:flex-row'>
              <img src={img} alt="Imagem do Restaurante" />
              <div className='flex flex-col gap-2'>
                <h1 className='font-medium text-colorText text-center text-2xl lg:text-left'>{restaurant?.name}</h1>
                <p className='text-colorText max-w-lg text-center text-lg lg:text-sm lg:text-left'>{restaurant?.description}</p>
                <div className='flex flex-col gap-1 mt-4 lg:mt-0'>
                  {/* Formatando os horários de abertura e fechamento para cada dia */}
                  {Object.entries(restaurant?.openingHours ?? {}).map(([dayType, hours]) => (
                    <p key={dayType} className='text-sm text-center text-colorText lg:text-start lg:text-xs'>
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
            <form className="flex items-center justify-center relative max-w-full lg:max-w-[90%] lg:w-[75%]">
              <input
                value={search}
                className="w-full min-w-80 px-10 py-3 shadow-custom rounded-full outline-none max-h-12 focus:border-2 focus:border-primary placeholder:text-colorText placeholder:font-medium"
                type="text"
                placeholder="Buscar no cardápio"
                onChange={handleSearch}
              />
              <img
                className="absolute right-10 top-4 h-4 w-4 text-gray-400"
                src={SearchIcon}
                alt="Icone de Lupa"
              />
            </form>
          </div>
          <div className='flex flex-col gap-8'>
            <FoodDetails title="Almoços" foods={filteredFoods!.filter(food => food.type === 'lunch') as Food[]} />
            <FoodDetails title="Bebidas" foods={filteredFoods!.filter(food => food.type === 'drink') as Food[]} />
            <FoodDetails title="Sobremesas" foods={filteredFoods!.filter(food => food.type === 'dessert') as Food[]} />
          </div>
        </div>
        <div className='w-[25%] hidden bg-bg h-full lg:block'></div>
      </div>
    </div>
  );
}
