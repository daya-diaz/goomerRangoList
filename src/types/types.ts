export interface Food {
  id: string;
  name: string;
  description: string;
  value: string;
  foodImg: string;
  inPromotion: boolean;
  valueWDiscount: string;
  type: 'lunch' | 'drink' | 'dessert';
}
