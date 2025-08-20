import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  isdatapresent:boolean=false;
  image_url:string='https://thumbs.dreamstime.com/b/welcome-sign-letters-confetti-background-celebration-greeting-holiday-illustration-banner-confetti-decoration-93802937.jpg'
  name:string='dinesh';
  age:number=29;

  mobile:string='+91';

  greetings(){
    alert("helloo");
  }

  typing(){
    alert("mobile");
  }

  fruits(){
    alert("fruits changed");
  }
}
