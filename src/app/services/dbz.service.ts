import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})

export class HerosService {
    public heros: Hero[] = [
        {
          id: uuid(),
          name: "Goku",
          power: '15000'
        },
        {
          id: uuid(),
          name: "Krillin",
          power: "700"
        }
      ]
    
      agregarCharacter(hero:Hero){
        this.heros.push({
            ...hero,
            id:uuid()
        })
      }
    
      deleteCharacter(id:string){
        console.log('INDEX A ELIMINAR', id)
        if(id){
            this.heros = this.heros.filter((e,i)=> e.id != id)
        }
      }
}