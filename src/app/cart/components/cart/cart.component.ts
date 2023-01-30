import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartProducts:any[]=[];
total:number=0;
  constructor() { }

  ngOnInit(): void {
    this.getCartProduct();
  
    
  }
getCartProduct(){
  if("cart" in localStorage){
    this.cartProducts=JSON.parse(localStorage.getItem("cart")!);
}
this.getTotalCartPrice();
}

getTotalCartPrice(){
  this.total=0;
  for(let i=0;i<this.cartProducts.length;i++){
    this.total+=(this.cartProducts[i].item.price * this.cartProducts[i].quantity);
  }
}
minus(index:number){
this.cartProducts[index].quantity--;
this.getTotalCartPrice();
localStorage.setItem("cart",JSON.stringify( this.cartProducts));
}
plus(index:number){
  this.cartProducts[index].quantity++;
  this.getTotalCartPrice();
  localStorage.setItem("cart",JSON.stringify( this.cartProducts));
  }
  detectChange(){
    this.getTotalCartPrice();
    localStorage.setItem("cart",JSON.stringify( this.cartProducts));
  }
  deleteItem(index:number){
this.cartProducts.splice(index,1);
this.getTotalCartPrice();
localStorage.setItem("cart",JSON.stringify( this.cartProducts));
  }
  clearData(){
    this.cartProducts=[];
    this.getTotalCartPrice();
    localStorage.setItem("cart",JSON.stringify( this.cartProducts));
  }
}
