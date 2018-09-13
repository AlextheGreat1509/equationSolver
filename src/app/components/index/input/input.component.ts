import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public value: string;
  constructor() { }

  ngOnInit() {
    this.value = 'Enter equation here';
  }

}
