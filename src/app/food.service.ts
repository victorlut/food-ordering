import { Injectable } from '@angular/core';
import { Food } from './models';
import data from '../assets/json/data.json';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getList(): Food[] {
    return data.menu;
  }
}
