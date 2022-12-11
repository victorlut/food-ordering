import { Component, OnInit } from '@angular/core';

import { Food } from '../models';
import { FoodService } from '../food.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  items: Food[] = [];

  constructor(
    private foodService: FoodService,
    private cartService: CartService
  ) {
    this.getList();
  }

  ngOnInit(): void {}

  getList(): void {
    this.items = this.foodService.getList();
  }

  addCart(food: Food): void {
    this.cartService.addFood(food);
  }
}
