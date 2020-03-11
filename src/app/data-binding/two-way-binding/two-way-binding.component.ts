import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  @ViewChild('demoInput') demoInput;
  input = 'test';
  inputObject = {
    data: 'test'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
