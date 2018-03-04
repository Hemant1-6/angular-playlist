import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   homeWork = "Home Works from here!";
   // myString = "I love to play Cricket";
   // myboolean = true;

   // alertMe(val){
   //   alert(val);
   // }
  // @Input() ninja;
  // @Output() onYell = new EventEmitter();
  //
  // FireYellEvent(e){
  //   this.onYell.emit(e);
//  }

  constructor() { }

  ngOnInit() {
  }

}
