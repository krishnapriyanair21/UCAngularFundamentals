import { Component } from "@angular/core";

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: `
    <div class = "app">
      <h3>AirLine Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          {{i}} : {{ passenger.fullname }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent{
  passengers: Passenger[]=[{
    id: 1,
    fullname: "Dave",
    checkedIn: true
  },{
    id: 2,
    fullname: "Dillon",
    checkedIn: true,
  },{
    id: 3,
    fullname: "Krishnapriya",
    checkedIn: false
  }]
  // title: string;
  // name: string = "";
  // constructor() {
  //   this.title = 'Ultimate Angular';
  // }
  // handleChange(value:string) {
  //   this.name = value
  // }
}