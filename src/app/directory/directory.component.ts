import { Component, OnInit } from '@angular/core';
import { LoggingService } from "../logging.service";
import { DataService} from "../data.service";
// import { ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';﻿
import {Observable} from 'rxjs/Rx';
declare var firebase : any;
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers : [DataService]
})
export class DirectoryComponent implements OnInit {

    ninjas = [];

  constructor(private logger:LoggingService , private dataService : DataService) {}
   //
   // logIt(){
   //   this.logger.log();
   // }

  ngOnInit() {
    // this.dataService.fetchData().subscribe(
    //   data => this.ninjas = data
    // );

    this.fbGetData();
  }

    fbGetData(){
      firebase.database().ref('/').on('child_added', (snapshot) =>{
        this.ninjas.push(snapshot.val())
      })
    }

      fbPostData(name,belt){
        firebase.database().ref('/').push({name : name , belt : belt});
      }

}
