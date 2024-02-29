import { Header } from "../components/Header";
import SearchIcon from '../assets/search.svg'
import RestaurantCard from "../components/RestaurantCard";

import { RESTAURANTS } from '../utils/data';
import { ChangeEvent, useState } from "react";

export default function Home(){
  const [search, setSearch] = useState('');

  function handleSearch(event: ChangeEvent<HTMLInputElement>){
    const query = event.target.value;
    setSearch(query);
  }

  const filteredRestaurants = search !== ''
    ? RESTAURANTS.filter(restaurant => restaurant.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : RESTAURANTS;
    return(
        <div className="flex flex-col gap-12">
          <Header/>
          <div className="flex flex-col gap-8 items-center justify-center">
            <h1 className="text-2xl text-colorText font-medium">Bem-vindo ao Lista Rango</h1>
            <form className="relative w-[300px] md:w-[50%] lg:w-[50%]">
              <input 
                value={search}
                className="w-full min-w-80 px-10 py-3 shadow-custom rounded-full outline-none max-h-12 focus:border-2 focus:border-primary placeholder:text-colorText placeholder:font-medium" 
                type="text" 
                placeholder="Buscar estabelecimento" 
                onChange={handleSearch}
              />
              <img 
                className="absolute right-10 top-4 h-4 w-4 text-gray-400" 
                src={SearchIcon} 
                alt="Icone de Lupa" 
              />
            </form>
          </div>
          <div className="flex justify-center gap-10 flex-wrap lg:w-[85%] m-auto">
            {
              filteredRestaurants.map((restaurant) => {
                return <RestaurantCard 
                  id={restaurant.id}
                  key={restaurant.id} 
                />
              })
            }
          </div>
        </div>
    )
}