import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id!:any;
data:any={};
loading:boolean=false;
  constructor(private route:ActivatedRoute , private service:ProductsService) { 
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getProduct();
  }
getProduct(){
  this.loading=true;
  this.service.getProductById(this.id).subscribe((res: any) => {
    this.loading=false;
    this.data=res;
  },error=>{
  this.loading=false;
  alert(error)}); //subscrib ----> observable object  قناة بتعبر من خلالها الداتا من الباك للفرونت
}
}
