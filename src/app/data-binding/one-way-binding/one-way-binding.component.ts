import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent implements OnInit {
  input = 'test';

  constructor() { }

  ngOnInit(): void {
  }

  triggerFunction(param) {
    console.log('triggerFunction is called!');
    console.log('params', param);
  }

  changeValue() {
    this.input = 'test123';
  }

}
