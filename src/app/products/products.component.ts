import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

   products :any=[
    {sno: 1,productname: 'pen',price: 10,rating: 3,freedelivery: 'true'},
    {sno: 2,productname: 'phone',price: 100,rating: 2,freedelivery: 'false'},
    {sno: 3,productname: 'shirt',price: 400,rating: 4,freedelivery:'true'},
    {sno: 4,productname: 'cap',price: 200,rating: 5,freedelivery:'false'},
    {sno: 5,productname: 'mobile case',price: 300,rating: 2,freedelivery:'true'},
    {sno: 6,productname: 'remote',price: 400,rating: 2.5,freedelivery:'false'},
   
  ];

 
  priceAscending(){
    this.products.sort((a:any,b:any)=>a.price-b.price);
  }
  priceDescending(){
    this.products.sort((a:any,b:any)=>b.price-a.price);
  }
  ratingAscending(){
    this.products.sort((a:any,b:any)=>a.rating-b.rating);
  }
  ratingDescending(){
    this.products.sort((a:any,b:any)=>b.rating-a.rating);
  }
    
  delete(index:number){
    this.products.splice(index,1);
  }

  delivery(){
    this.products = this.products.map((product: any)=>{
    product.price = product.price+50; // Add delivery charge
    return product;
  });
}

  applyDiscount() {
    this.products = this.products.map((product: any) => {
    product.price = product.price /2;
    return product;
  });
}

total(){
    var products =this.products.reduce((sum:any,product:any)=>sum+product.price,0);
    alert(products);
  };

  name:string='';
    productfilter(){
      this.products=this.products.filter((product:any)=>product.name.includes(this.name));
    }

    ProductName:string='';
    Price:number=0;
    Rating:number=0;
    FreeDelivery:boolean=true;
    addproduct(){
      var user={
        ProductName:this.ProductName,
        Price:this.Price,
        Rating:this.Rating,
        FreeDelivery:this.FreeDelivery
      }
      this.products.unshift(user)
    }  
}
