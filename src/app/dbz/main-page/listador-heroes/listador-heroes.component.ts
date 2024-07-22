import { Component, Input } from '@angular/core';
import { Hero } from '../main-page.component';

@Component({
  selector: 'app-listador-heroes',
  templateUrl: './listador-heroes.component.html',
  styleUrls: ['./listador-heroes.component.css']
})

export class ListadorHeroesComponent {
  @Input() data: Hero[] = []
  @Input() addHero: any;

  addCharacter(){
    this.addHero()
  }
}
