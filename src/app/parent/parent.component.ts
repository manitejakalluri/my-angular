import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parent:number=0;
  child:number=0;
  // count(data:number){
  //   alert(data);
  // }

  catch(value:number){
    this.child=value;
  }
}
