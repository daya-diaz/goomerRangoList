import { useParams } from 'react-router-dom';
import { RESTAURANTS } from '../utils/data';
import img from '../assets/restaurantImg.png';
import SearchIcon from '../assets/search.svg'
import { Header } from '../components/Header';
import arrow from '../assets/arrowDown.png'
import FoodCard from '../components/FoodCard';
import { ChangeEvent, useState } from 'react';
import FoodOverlay from '../components/FoodOverlay';

interface FoodDetails {
  name: string;
  description: string;
  value: string;
}

export default function RestaurantDetails() {
  const [foodDetails, setFoodDetails] = useState<FoodDetails | null>(null);

  const [showOverlay, setShowOverlay] = useState<boolean>(false); // Estado para controlar a exibição do overlay
  const [selectedFoodId, setSelectedFoodId] = useState<string>('');
  const [search, setSearch] = useState('');

  function handleSearch(event: ChangeEvent<HTMLInputElement>){
    const query = event.target.value;
    setSearch(query);
  }
  const { id } = useParams<{ id: string }>();
  const restaurant = RESTAURANTS.find(restaurant => restaurant.id === id);
  const foodRestaurant = restaurant?.foodsList;

  const filteredFoods = search !== ''
    ? foodRestaurant?.filter(food => food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : foodRestaurant;

    function handleOpenOverlay(id: string, name: string, description: string, value: string) {
      setSelectedFoodId(id);
      setFoodDetails({ name, description, value }); // Adicione essas informações ao estado
      setShowOverlay(true);
    }
    
    const handleCloseOverlay = () => {
      setShowOverlay(false);
    };
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

          {/*Lógica para se o restaurante não tiver algum determinado tipo de comida, o details não renderizar*/}
          {restaurant?.foodsList.some(food => food.type === 'lunch') && (
            <details className='w-full'>
              <summary className='flex items-center justify-between w-full lg:w-[75%] p-3 border-b-2 border-colorText'>
                <span className='text-colorText font-semibold'>Almoços</span>
                <img className='w-4 h-[9px]' src={arrow} />
              </summary>
              <ul className='flex flex-wrap pt-6 justify-between gap-5 w-full md:w-[50%] lg:w-[75%]'>
              {
                filteredFoods?.map(food => {
                  if (food.type === 'lunch') {
                    return (
                      <FoodCard
                        onClick={() => handleOpenOverlay(food.id, food.name, food.description, food.value)}
                        key={food.id}
                        inPromotion={food.inPromotion}
                        valueWDiscount={food.valueWDiscount}
                        id={food.id}
                        name={food.name}
                        description={food.description}
                        value={food.value}
                        pic={food.foodImg}
                      />
                    );
                  } else {
                    return null;
                  }
                })
              }

              </ul>
            </details>
          )}
          {restaurant?.foodsList.some(food => food.type === 'drink') && (
              <details className='w-full'>
                <summary className='flex items-center justify-between lg:w-[75%] p-3 border-b-2 border-colorText'>
                  <span className='text-colorText font-semibold'>Bebidas</span>
                  <img className='w-4 h-[9px]' src={arrow} />
                </summary>
                <ul className='flex flex-wrap pt-6 justify-between gap-5 w-full lg:w-[75%]'>
                  {
                    filteredFoods?.map(food => {
                      if (food.type === 'drink') {
                        return (
                          <FoodCard
                            onClick={() => handleOpenOverlay(food.id, food.name, food.description, food.value)}
                            key={food.id}
                            inPromotion={food.inPromotion}
                            valueWDiscount={food.valueWDiscount}
                            id={food.id}
                            name={food.name}
                            description={food.description}
                            value={food.value}
                            pic={food.foodImg}
                          />
                        )
                      } else {
                        return
                      }
                    })
                  }
                </ul>
              </details>
          )}
          {restaurant?.foodsList.some(food => food.type === 'dessert') && (
            <details className='w-full'>
              <summary className='flex items-center justify-between lg:w-[75%] p-3 border-b-2 border-colorText'>
                <span className='text-colorText font-semibold'>Sobremesas</span>
                <img className='w-4 h-[9px]' src={arrow} />
              </summary>
              <ul className='flex flex-wrap pt-6 justify-between gap-5 w-full md:w-[50%] lg:w-[75%]'>
                {
                  filteredFoods?.map(food => {
                    if (food.type === 'dessert') {
                      return (
                        <FoodCard
                        onClick={() => handleOpenOverlay(food.id, food.name, food.description, food.value)}
                        key={food.id}
                        inPromotion={food.inPromotion}
                        valueWDiscount={food.valueWDiscount}
                        id={food.id}
                        name={food.name}
                        description={food.description}
                        value={food.value}
                        pic={food.foodImg}
                      />
                      )
                    } else {
                      return null;
                    }
                  })
                }
              </ul>
            </details>
          )}

          {showOverlay && <FoodOverlay foodId={selectedFoodId} foodDetails={foodDetails}  onClick={handleCloseOverlay} />}
        </div>
        <div className='w-[25%] hidden bg-bg h-full lg:block'></div>
      </div>
    </div>
  );
}
