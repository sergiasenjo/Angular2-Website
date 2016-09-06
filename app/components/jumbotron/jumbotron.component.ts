import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
    private jbtHeading:string;
    private jbtText:string;
    private jbtBtnText:string;
    private jbtBtnUrl:string;

    constructor() {
        this.jbtHeading = "Angular 2 Website";
        this.jbtText = "Example of Angular 2 Website.";
        this.jbtBtnText = "Learn More";
        this.jbtBtnUrl = "http://angular.io";
    }
}
