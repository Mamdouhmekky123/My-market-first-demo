import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.css']
})
export class LastPageComponent implements OnInit {
  cartProducts:any[]=[];
  total:number=0;
  constructor() { }

  ngOnInit(): void {
  this.getCartProduct();
  this. getTotalCartPrice();
  }
  getCartProduct(){
    if("cart" in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem("cart")!);
  }
  }
  getTotalCartPrice(){
    this.total=0;
    for(let i=0;i<this.cartProducts.length;i++){
      this.total+=(this.cartProducts[i].item.price * this.cartProducts[i].quantity);
    }
  }
}
