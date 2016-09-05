import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';

@Component({
  selector: 'my-app',
  template: '<navbar></navbar><jumbotron></jumbotron>'
})

export class AppComponent { }
