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
  }

  constructor() { }
}
