import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  public name = 'Solve Equation';
  public working = '';
  constructor() { }

  ngOnInit() {
  }
  public onClick(): void {
    this.name = 'Solving';
    this.working = 'http://orig14.deviantart.net/ad27/f/2012/217/8/1/animated_cogwheel_by_lunar_alienism-d59wxbv.gif';
  }
}
