export class Food {
  name: string = '';
  description: string = '';
  price: number = 0;
  image: string = '';
  quantity: number = 0;
  id: number = 0;
}

export class Cart {
  list: Food[] = [];
  total: number = 0;
}
