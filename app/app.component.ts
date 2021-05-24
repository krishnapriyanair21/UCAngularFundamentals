import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: `
    <div>
      {{title}}
    </div>
  `
})
export class AppComponent{
  title: string;
  constructor() {
    this.title = 'Ultimate Angular';
  }
}