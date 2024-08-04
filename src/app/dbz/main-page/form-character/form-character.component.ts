import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent {
  @Input() nuevo:any = {
    name: '',
    power: ''
  }
  @Output() onNewHero: EventEmitter<Hero> = new EventEmitter<Hero>()
  // @Input() data:Hero[] = []

  agregar(){
    this.onNewHero.emit(this.nuevo)

    this.nuevo = {
      name: '',
      power: ''
    }
  }
}
