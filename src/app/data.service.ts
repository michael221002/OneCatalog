import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Zahl: number = 0;

  plusOne() {
    this.Zahl +=1;
  }

  constructor() {
  }
}
