import { Injectable } from '@angular/core';
import { Food, Cart } from './models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.get();
  cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() {}

  addFood(food: Food) {
    const index = this.cart.list.findIndex(
      (value: Food) => value.id === food.id
    );

    if (index === -1) this.cart.list.push(food);

    this.save();
  }

  removeFood(item: Food) {
    const index = this.cart.list.findIndex(
      (value: Food) => value.id === item.id
    );

    if (index !== -1) this.cart.list.splice(index, 1);

    this.save();
  }

  getCartObservabel(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  save(): void {
    this.calTotal();

    const cartJson = JSON.stringify(this.cart);
    sessionStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  get(): Cart {
    const cartJson = sessionStorage.getItem('Cart');
    const cart = cartJson ? JSON.parse(cartJson) : new Cart();

    return cart;
  }

  change(item: Food): void {
    const index = this.cart.list.findIndex(
      (value: Food) => value.id === item.id
    );

    if (index !== -1) this.cart.list[index] = item;

    this.save();
  }

  calTotal(): void {
    let total = 0;

    console.log(this.cart.list);
    for (let i = 0; i < this.cart.list.length; i++) {
      total += this.cart.list[i].quantity * this.cart.list[i].price;
    }

    this.cart.total = total;
  }

  clear(): void {
    sessionStorage.removeItem('Cart');
    this.cart = new Cart();
    this.save();
  }
}
