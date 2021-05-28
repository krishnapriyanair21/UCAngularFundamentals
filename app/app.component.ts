import { Component } from "@angular/core";

interface Child {
  name: string,
  age: number
}
interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children: Child[] | null
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
          <div class ="children">
            Children: {{ passenger.children?.length || 0}}
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