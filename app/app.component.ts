import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: `
    <div class = "app">
    <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent{
  
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
