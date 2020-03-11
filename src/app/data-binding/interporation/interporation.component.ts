import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interporation',
  templateUrl: './interporation.component.html',
  styleUrls: ['./interporation.component.css']
})
export class InterporationComponent implements OnInit {
  message = 'Use double curvy bracket {{ property_name }} and place the property name in inside';
  sampleExpression = '{{ property_expression | pipe_expression }}';

  constructor() { }

  ngOnInit(): void {
  }

}
