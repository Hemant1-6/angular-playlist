import { Component } from '@angular/core';

import  {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*directives: [HomeComponent , ROUTER_DIRECTIVES ]*/
})
export class AppComponent {
  title = 'App works from here!';

/*  ninja = {
    name :  "Ryu",
    belt :  "Red"
  };

  yell(e){
    alert("I am Yelling");
  }*/
}
