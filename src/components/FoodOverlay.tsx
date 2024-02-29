import img from '../assets/foodImg.png'
interface FoodOverlayProps {

}
export default function FoodOverlay(){
    return(
        <div className=''>
          <div>
            <img className='' src={img} alt='Foto do prato' />
          </div>
          <div>

          </div>
        </div>
    )
}