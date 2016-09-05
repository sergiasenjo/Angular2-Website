import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';

@Component({
  selector: 'my-app',
  template: '<navbar></navbar><jumbotron></jumbotron><home></home>'
})

export class AppComponent { }
