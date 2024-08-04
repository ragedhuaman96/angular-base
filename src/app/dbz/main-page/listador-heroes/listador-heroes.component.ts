import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';

@Component({
  selector: 'app-listador-heroes',
  templateUrl: './listador-heroes.component.html',
  styleUrls: ['./listador-heroes.component.css']
})

export class ListadorHeroesComponent {
  @Input() data: Hero[] = []
  @Output() onDeleteHero: EventEmitter<string> = new EventEmitter<string>()

  delete(id?:string){
    console.log('INDEX DE ITEM A ELIMINAR', id)
    if(id){
      this.onDeleteHero.emit(id)
    }
  }
}
