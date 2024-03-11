import { render } from "@testing-library/react";
import FoodCard from "./FoodCard";
import '@testing-library/jest-dom';

describe('FoodCard component', () => {
  it('renders with correct information', () => {
    const foodData = {
      id: '1',
      type: 'lunch',
      name: 'Parmegiana',
      description: 'Parmegiana deliciosa que serve até 2 pessoas. Acompanha arroz e batata fritas.',
      foodImg: '/assets/foodImg.png',
      value: '39.90',
      inPromotion: true,
      valueWDiscount: '29.99'
    };

    const { getByText, getByAltText } = render(
      <FoodCard
        id={foodData.id}
        name={foodData.name}
        description={foodData.description}
        value={foodData.value}
        pic={foodData.foodImg}
        inPromotion={foodData.inPromotion}
        valueWDiscount={foodData.valueWDiscount}
        onClick={() => {}}
      />
    );

    expect(getByText(foodData.name)).toBeInTheDocument();
    expect(getByText(foodData.description)).toBeInTheDocument();
    const priceRegex = new RegExp(`R\\$\\s*${foodData.value.replace('.', '\\.')}`);
    expect(getByText(priceRegex)).toBeInTheDocument();
    expect(getByAltText(foodData.foodImg)).toBeInTheDocument();

  })
})