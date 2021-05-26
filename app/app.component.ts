import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: `
    <div>
        <h1 [innerHTML] = "title"></h1>
        <div>
          <input type= "text" [value] = "name">
          <div>{{ name }}</div>
        </div>
     <!--
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
}