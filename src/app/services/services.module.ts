import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,MatCardModule, MatButtonModule
  ]
})
export class ServicesModule { }
