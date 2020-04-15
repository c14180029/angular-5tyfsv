import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Andrew Firman';
  item = {
    "nama":"Mainan",
    "harga":50000
  }
}
