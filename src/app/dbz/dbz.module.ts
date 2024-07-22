import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormCharacterComponent } from './main-page/form-character/form-character.component';
import { ListadorHeroesComponent } from './main-page/listador-heroes/listador-heroes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageComponent,
    FormCharacterComponent,
    ListadorHeroesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
