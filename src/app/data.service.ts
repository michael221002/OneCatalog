import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Zahl: number = 1;

  getZahl(){
    return this.Zahl;
  }

  setZahl(inp:number){
    this.Zahl += inp;
    console.log(this.Zahl)
  }

  constructor() {
    this.Zahl = 1;
  }
}
