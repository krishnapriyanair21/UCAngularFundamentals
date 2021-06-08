import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-dashboard',
    styleUrls:['passenger-dashboard.component.scss'],
    template:`
    <div>
      <passenger-count
        [items] = "passengers">
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
      </passenger-detail>
    </div>
    `
})

export class PassengerDashboardComponent implements OnInit{
    passengers: Passenger[];
    constructor(){}
    ngOnInit(){
        this.passengers = [{
            id: 1,
            fullname: "Dave",
            checkedIn: true,
            checkInDate: 1490742000000,
            children: [{name:"Buddy", age: 3}]
        },{
            id: 2,
            fullname: "Dillon",
            checkedIn: true,
            checkInDate: 14884128000000,
            children: [{name:"pickle", age: 7}]
        },{
            id: 3,
            fullname: "Krishnapriya",
            checkedIn: false,
            checkInDate: null,
            children:null
        }, {
            id: 4,
            fullname: "Sparky",
            checkedIn: false,
            checkInDate: null,
            children: [{ name: "Sammy", age: 1 }, { name: 'Sadie', age: 1 }]
        }
    ]
  }
  handleEdit(event) {
    console.log(event);
  }
  handleRemove(event) {
    console.log(event);
  }
}