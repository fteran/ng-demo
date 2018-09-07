import { Component } from "@angular/core";

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <h2>{{event.name}}</h2>
    </div>
  `
})
export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect'
  }

}
