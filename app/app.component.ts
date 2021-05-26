import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: `
    <div>
      <h1 [innerHTML] = "title"></h1>
      <div class = "app">
        <button (click)="handleClick()">
          Change name
        </button>
        <input
          type= "text"
          [value] = "name"
          (input) = "handleInput($event)"
          (blur)="handleBlur($event)">
      </div>
      <div>{{ name }}</div>
    <!--
      <div>
        <input type= "text" [value] = "name">
        <div>{{ name }}</div>
      </div>
      <div>
        {{numberOne + numberTwo}}
      </div>
      <div>
        {{ isHappy ? ':)' : ':(' }}
      </div>
    // -->
    </div>
  `
})
export class AppComponent{
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;
  name: string = "Krishna";
  constructor() {
    this.title = 'Ultimate Angular';
  }
  handleClick() {
    this.name = "Nair";
  }
  handleInput(event: any) {
    this.name = event.target.value;
  }
  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }
}