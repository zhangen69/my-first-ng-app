import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {
  message = 'This is a message';
  price = 2354.1234;
  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
