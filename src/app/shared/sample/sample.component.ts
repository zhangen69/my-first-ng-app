import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

enum ComponentState {
  HasInputOnly,
  HasOutputOnly,
  HasInputAndOutput,
}

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  @Input() inputObject;
  @Input() inputString;
  @Output() outputFunction = new EventEmitter<string>();
  hasOutput: boolean;

  constructor() {
    this.hasOutput = this.outputFunction.observers.length > 0;
  }

  ngOnInit(): void {
  }

  sendOutout() {
    this.outputFunction.emit('some value');
  }

}
