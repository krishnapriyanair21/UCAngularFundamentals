import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: `
    <div class = "app">
      <input
        type= "text"
        [value] = "name"
        (input) ="handleChange($event.target.value)">
      
        <div *ngIf="name.length">
          Searching for ... {{ name }}
        </div>
    </div>
  `
})
export class AppComponent{
  title: string;
  name: string = "";
  constructor() {
    this.title = 'Ultimate Angular';
  }
  handleChange(value:string) {
    this.name = value
  }
}