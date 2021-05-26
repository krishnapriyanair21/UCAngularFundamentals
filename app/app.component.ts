import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: `
    <div class = "app">
      <button (click)="handleClick(username.value)">
        Get value
      </button>
      <input type= "text" #username>
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent{
  title: string;
  // numberOne: number = 1;
  // numberTwo: number = 2;
  // isHappy: boolean = true;
  name: string = "Krishna";
  constructor() {
    this.title = 'Ultimate Angular';
  }
  handleClick(value:string) {
    console.log(value);
  }
  // handleChange(value:string) {
  //   this.name = value;
  // }
}