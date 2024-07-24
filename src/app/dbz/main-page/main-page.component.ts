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
  public nuevo:Hero = {
    name:"",
    power:""
  }

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

  agregarCharacter(event:Hero){
    this.heros.push(event)
  }
}
