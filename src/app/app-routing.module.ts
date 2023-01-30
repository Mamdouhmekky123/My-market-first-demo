import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/components/cart/cart.component';
import { LastPageComponent } from './cart/components/last-page/last-page.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { DetailsComponent } from './products/components/details/details.component';

const routes: Routes = [
  {path:"products",component:AllProductsComponent},
  {path:"cart",component:CartComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"last-page",component:LastPageComponent},
  {path:"**",redirectTo:"products",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
