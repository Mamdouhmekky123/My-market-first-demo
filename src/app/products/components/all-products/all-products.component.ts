import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = []; //بعمل ارراي  عشان استقبل فيه ال داتا
  categories:any[] =[];
  cartData:any[]=[];
  loading:boolean=false;
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading=true;
    this.service.getAllProducts().subscribe((res: any) => {
      this.products=res;
      this.loading=false;
    } , error=>{
      alert(error.message);
      this.loading=false;
    }); //subscrib ----> observable object  قناة بتعبر من خلالها الداتا من الباك للفرونت
  }
  getCategories() {
    this.loading=true;
    this.service.getAllCategories().subscribe((res: any) => {
      this.categories=res;
      this.loading=false;
    } , error=>{
      alert(error.message);
      this.loading=false;
    }); 
  }
  filterCategory(event:any){
    let value = event.target.value;
    console.log(value);
    if(value==0){
      this.getProducts();
    }
    else{
      this.getProductOfSpecificCategory(value);
    }
  
  }
  getProductOfSpecificCategory(keyword:any){
    this.loading=true;
    this.service.getProductOfCategory(keyword).subscribe((res: any) => {
      this.products=res;
      this.loading=false;
    } , error=>{
      alert(error.message);
      this.loading=false;
    }); 
  }
  addToChart(event:any){
    if("cart" in localStorage){
      this.cartData=JSON.parse(localStorage.getItem("cart")!); // parse used when recieve from local storage
      let exist = this.cartData.find(item => item.item.id == event.item.id);
      if(exist){
        alert("you have already added this product to your cart");
      }else{
        alert('This product is successfully added to the cart ');
        this.cartData.push(event);
        localStorage.setItem("cart",JSON.stringify( this.cartData));  // stringfy used when send or update local storage
      }
    
    }else{
      this.cartData.push(event);
      localStorage.setItem("cart",JSON.stringify( this.cartData));
    }
      }

}