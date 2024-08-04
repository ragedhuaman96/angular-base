import { Component } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';
import { HerosService } from 'src/app/services/dbz.service';

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

  constructor (
    private herosService: HerosService
  ){
  }

  get heros(): Hero[] {
    return [...this.herosService.heros]
  }

  onDeleteHero(id:string){
    this.herosService.deleteCharacter(id)
  }

  addHero(hero:Hero){
    this.herosService.agregarCharacter(hero)
  }
}
