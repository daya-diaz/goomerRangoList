import { useState } from 'react';
import imgFood from '../assets/foodImg.png'
import closeIcon from '../assets/closeIcon.svg'
interface FoodOverlayProps {
  foodId: string,
  onClick: () => void,

}
export default function FoodOverlay({onClick}: FoodOverlayProps){
  const [quantity, setQuantity] = useState(1);
  function handleCloseOverlay( ) {
    onClick();
  }

  function decreaseQuantity() {
    if(quantity === 0) {
      return
    }
    setQuantity(quantity - 1);
  }
  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

    return(
        <div className='fixed top-0 left-0 bg-colorText bg-opacity-30 w-screen h-screen flex items-center m-auto justify-center z-50'>
          <button onClick={handleCloseOverlay} className='fixed bg-white top-[13%] right-[31%] p-3 rounded-full shadow-custom'>
            <img className='w-5 h-5' src={closeIcon} alt="Fechar card de prato" />
          </button>
          <div className='w-[553px] px-4 bg-white rounded-lg shadow-customHeader'>
            <div className='flex flex-col w-full pt-6 border-b-[1px] border-bg pb-6'>
              <img className='w-full h-auto max-h-[200px] rounded-md' src={imgFood} alt='Imagem do prato'/>
              <div className='flex justify-between items-end'>
                <div className='w-full flex flex-col flex-1 pt-10 gap-1'>
                  <h1 className='font-medium text-colorText text-2xl'>{}</h1>
                  <p className='font-medium text-colorText max-w-[380px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div>
                  <span className='text-3xl text-primary font-medium'>R$ 19.90</span>
                </div>
              </div>
            </div>
            <div className='flex justify-between py-6'>
              <div className='flex gap-5 items-center justify-center rounded-md border-bg border-[1px] w-[125px] text-primary font-medium text-xl'>
                <button onClick={decreaseQuantity} className={`${quantity ? '' : 'text-gray500 cursor-auto'}`}>
                  -
                </button>
                <span>
                  {quantity}
                </span>
                <button onClick={increaseQuantity}>
                  +
                </button>
              </div>
              <button onClick={increaseQuantity} className='flex justify-between p-3 bg-primary text-white font-medium items-center w-[265px] rounded-md'>
                Adicionar
                <span>19.90</span>
              </button>
            </div>
          </div>
        </div>
    )
}