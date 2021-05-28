import { Component } from "@angular/core";

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate?: number
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: `
    <div class = "app">
      <h3>AirLine Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span
          class = "status"
          [class.checked-in] ="passenger.checkedIn"> </span>
          {{i}} : {{ passenger.fullname }}
          <p> {{ passenger | json }} </p>
          <div class="date">
            Check in date:
            {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
          </div>
        </li>
      </ul>
    </div>
  `
})
export class AppComponent{
  passengers: Passenger[]=[{
    id: 1,
    fullname: "Dave",
    checkedIn: true,
    checkInDate: 1490742000000
  },{
    id: 2,
    fullname: "Dillon",
    checkedIn: true,
    checkInDate: 14884128000000
  },{
    id: 3,
    fullname: "Krishnapriya",
    checkedIn: false,
    checkInDate: null
    }, {
    id: 4,
    fullname: "Sparky",
    checkedIn: false,
    checkInDate: null
  }]
}