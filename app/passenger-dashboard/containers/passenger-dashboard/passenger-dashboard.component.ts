import { Component } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-dashboard',
    styleUrls:['passenger-dashboard.component.scss'],
    template:`
    <div>
      <h3>AirLine Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span
          class = "status"
          [class.checked-in] ="passenger.checkedIn"> </span>
          {{i}} : {{ passenger.fullname }}
          <div class="date">
            Check in date:
            {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
          </div>
          <div class ="children">
            Children: {{ passenger.children?.length || 0}}
          </div>
        </li>
      </ul>
    </div>
    `
})

export class PassengerDashboardComponent{
    passengers: Passenger[]=[{
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
      }]
}