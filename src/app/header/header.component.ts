import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartQuantity: number = 0;

  constructor(private cartService: CartService) {
    cartService.getCartObservabel().subscribe((newCart) => {
      this.cartQuantity = newCart.list.length;
    });
  }
}
