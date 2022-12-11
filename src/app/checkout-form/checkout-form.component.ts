import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Food } from '../models';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent {
  total: number = 0;
  items: Food[] = [];

  constructor(private cartService: CartService) {
    cartService.getCartObservabel().subscribe((newCart) => {
      this.total = newCart.total;
      this.items = newCart.list;
    });
  }

  increase(item: Food): void {
    item.quantity++;

    this.cartService.change(item);
  }

  decrease(item: Food): void {
    if (item.quantity <= 0) item.quantity = 0;
    else item.quantity--;

    this.cartService.change(item);
  }

  removeFood(item: Food): void {
    console.log(item);
    this.cartService.removeFood(item);
  }

  checkout(): void {
    this.cartService.clear();
  }
}
