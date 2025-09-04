import { Component, Input } from '@angular/core';
import { User } from '../user';

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

  userdetails:User={
    name:'teja',
    mobile:9989999999,
    isIndian:true
  }
}
