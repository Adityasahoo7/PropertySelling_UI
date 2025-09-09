import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [
    PropertyCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule   
  ],
  exports: [
    PropertyCardComponent
  ]
})
export class SharedModule {}
