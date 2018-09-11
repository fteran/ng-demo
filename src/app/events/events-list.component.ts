import { Component } from "@angular/core";

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2018',
    time: '10:00 AM',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shild.png',
    location: {
      address: '1057 DT',
      city: 'Dallas',
      country: "United States"
    }
  }
}
