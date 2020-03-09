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
  @Input() inputData: any = null;
  @Output() outputFunction = new EventEmitter<string>();
  state: string;

  constructor() {
    // if (this.inputData && this.outputFunction) {
    //   this.state = ComponentState[ComponentState.HasInputAndOutput];
    // } else if (this.inputData) {
    //   this.state = ComponentState[ComponentState.HasInputOnly];
    // } else if (this.outputFunction) {
    //   this.state = ComponentState[ComponentState.HasOutputOnly];
    // }
  }

  ngOnInit(): void {
  }

  sendOutout() {
    this.outputFunction.emit('some value');
  }

}
