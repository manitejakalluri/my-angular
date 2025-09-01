import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // @Input() count:number=0;
  // @Output() countevent:EventEmitter<number>=new EventEmitter();
  // send(){
  //   this.countevent.emit(365);
  // }

  @Input() num1:number=0;
  num2:number=0;
  @Output() numevent:EventEmitter<number>=new EventEmitter();
  send(){
  this.numevent.emit(this.num2);
  }
}
