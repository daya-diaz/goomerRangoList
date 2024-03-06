import { Link } from 'react-router-dom';
import RestaurantImg from '../../assets/restaurantImg.png';
import { RESTAURANTS } from '../../utils/data';
import { getDay } from 'date-fns';

interface OpeningHours {
  day: string;
  opensAt: string;
  closesAt: string;
}

interface Address {
  city: string;
  street: string;
}

interface Restaurant {
  id: string;
  name: string;
  description: string;
  address: Address;
  openingHours: {
    weekdays: OpeningHours[];
    saturday: OpeningHours[];
    sunday: OpeningHours[];
  };
}

interface RestaurantCardProps {
  id: string;
}

export default function RestaurantCard({ id }: RestaurantCardProps) {
  const restaurant: Restaurant | undefined = RESTAURANTS.find((restaurant) => restaurant.id === id);

  if (!restaurant) {
    return null; // Retorna null se o restaurante não for encontrado
  }

  const currentDate = new Date();
  const currentDayOfWeek = getDay(currentDate);

  let openingHours: OpeningHours[] = [];

  switch (currentDayOfWeek) {
    case 0: 
      openingHours = restaurant.openingHours.sunday;
      break;
    case 6: 
      openingHours = restaurant.openingHours.saturday;
      break;
    default: 
      openingHours = restaurant.openingHours.weekdays;
      break;
  }

  const todayOpeningHours = openingHours[0]; // Considera apenas o primeiro horário do dia atual

  // Verifica se o restaurante está aberto no momento atual
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();

  const opensAtParts = todayOpeningHours.opensAt.split(':');
  const closesAtParts = todayOpeningHours.closesAt.split(':');
  const opensAtHour = parseInt(opensAtParts[0]);
  const opensAtMinute = parseInt(opensAtParts[1]);
  const closesAtHour = parseInt(closesAtParts[0]);
  const closesAtMinute = parseInt(closesAtParts[1]);

  const isOpen =
    currentHour >= opensAtHour &&
    currentHour <= closesAtHour &&
    (currentHour !== closesAtHour || currentMinutes <= closesAtMinute) &&
    (currentHour !== opensAtHour || currentMinutes >= opensAtMinute);

  // Determina a classe de estilo com base no status de abertura do restaurante
  const tagClass = isOpen ? 'bg-secondary' : 'bg-wistful';

  // Renderiza o componente do cartão de restaurante
  return (
    <Link to={`/details/${id}`} className="relative w-80 lg:w-[22.8rem] shadow-custom">
      <div className="w-full flex items-center gap-6">
        <img className="w-[35%]" src={RestaurantImg} alt="Imagem de perfil do restaurante" />
        <div className="w-[65%] flex flex-col gap-[2px] items-start">
          <h3 className="text-colorText font-medium">{restaurant.name}</h3>
          <p className="text-colorText text-xs">{restaurant.address.street}, {restaurant.address.city}</p>
        </div>
      </div>
      <div className={`absolute right-[-5%] top-[-15%] flex items-center justify-center shadow-customTag h-12 w-12 rounded-full ${tagClass} text-white`}>
        <span className="text-center text-[8px] font-bold">{isOpen ? `Aberto\nagora` : 'Fechado\nagora'}</span>
      </div>
    </Link>
  );
}
