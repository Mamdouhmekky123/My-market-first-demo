import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { LastPageComponent } from './components/last-page/last-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CartComponent,
    LastPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CartModule { }
