import { Component } from '@angular/core';

import { HomeComponent } from './home/home.component'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  { brand = 'OPN'; }
