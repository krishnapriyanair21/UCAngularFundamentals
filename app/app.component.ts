import { Component } from "@angular/core";

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: `
    <div class = "app">
    <nav class="nav">
    <a
      *ngFor="let item of nav"
      [routerLink]="item.link"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{exact:item.exact}">
      {{item.name}}
    </a>
    </nav>
    <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent{
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    },
  ]
}

/* Smart/ Dumb Component */
// Smart component:
  // communicates with services
  // render child comps
// Dumb component
  // accepts data via inputs
  // emit data changes via event outputs

/* One- way dataflow overview */
  // component tree with service -> smart component -> children
  // change made in lowest level child - How to get change to service if needed
    // pass data back up via event from child component
    // pass for all "dumb" components via event
    // rerender data for child nodes if needed
  // Golden rule:
    // Data flows down
    // events emit up
