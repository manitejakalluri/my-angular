import { Component } from '@angular/core';

@Component({
  selector: 'app-calcultor',
  templateUrl: './calcultor.component.html',
  styleUrls: ['./calcultor.component.css']
})
export class CalcultorComponent {

  // num1:number=0;
  // num2:number=0;
  // sum:number=0

  // addition(){
  //   this.sum=this.num1+this.num2;
  //   console.log(this.sum);
  // }
   num1:number=0;
  num2:number=0;
  result:number=0;


  addition(){
    this.result=this.num1+this.num2;
  }

    subtraction(){
    this.result=this.num1-this.num2;
  }

    multiplication(){
    this.result=this.num1*this.num2;
  }

    division(){
    this.result=this.num1/this.num2;
  }
}
