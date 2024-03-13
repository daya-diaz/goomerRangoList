import { useState } from 'react';
import FoodCard from '../FoodCard/FoodCard'; 
import { Food } from '../../types/types';
import arrowDown from '../../assets/arrowDown.png';
import arrowRight from '../../assets/arrowRight.png'
import FoodOverlay from '../FoodOverlay/FoodOverlay';

interface FoodDetailsProps {
  title: string;
  foods: Food[];
}
interface FoodDetails {
  name: string;
  description: string;
  value: string;
}

function FoodDetails({ title, foods }: FoodDetailsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [foodDetails, setFoodDetails] = useState<FoodDetails | null>(null);

  const [showOverlay, setShowOverlay] = useState<boolean>(false); // Estado para controlar a exibição do overlay
  const [selectedFoodId, setSelectedFoodId] = useState<string>('');

  function handleOpenOverlay(id: string, name: string, description: string, value: string) {
    setSelectedFoodId(id)
    setFoodDetails({ name, description, value }); // Adiciona essas informações ao estado
    setShowOverlay(true);
  }

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <details
        className='w-full cursor-pointer'
        open={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      >
        <summary className='flex items-center justify-between lg:w-[75%] p-3 border-b-2 border-colorText'>
          <span className='text-colorText font-semibold'>{title}</span>
          <img src={`${isOpen ? arrowDown : arrowRight}`} />
        </summary>
        <ul className='flex flex-wrap pt-6 justify-between gap-5 w-full lg:w-[75%]'>
          { foods.length === 0 
            ? <p className='cursor-default'>Infelizmente não possuímos esse tipo de comida ainda.</p> 
            : foods.map(food => (
            <FoodCard
              key={food.id}
              onClick={() => handleOpenOverlay(food.id, food.name, food.description, food.value)}
              inPromotion={food.inPromotion}
              valueWDiscount={food.valueWDiscount}
              id={food.id}
              name={food.name}
              description={food.description}
              value={food.value}
              pic={food.foodImg}
            />
          ))}
        </ul>
      </details>
      {showOverlay && <FoodOverlay foodId={selectedFoodId} foodDetails={foodDetails} onClick={handleCloseOverlay} />}
    </>
  );
}

export default FoodDetails;
