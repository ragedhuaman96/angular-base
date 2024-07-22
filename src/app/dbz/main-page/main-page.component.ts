import { Component } from '@angular/core';

export interface Hero{
  name:string;
  power:string
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public heros: Hero[] = [
    {
      name: "Goku",
      power: '15000'
    },
    {
      name: "Krillin",
      power: "700"
    }
  ]

  addHero(elem:Hero){
    this.heros.push(elem)
  }
}
