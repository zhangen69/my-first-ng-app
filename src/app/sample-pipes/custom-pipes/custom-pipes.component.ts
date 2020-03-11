import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {
  products = [
    { id: 1, name: 'Sony', price: 3000, quantity: 5 },
    { id: 2, name: 'iPhone', price: 4000, quantity: 3 },
    { id: 3, name: 'Samsung', price: 3500, quantity: 7 },
    { id: 4, name: 'Huawei', price: 4500, quantity: 10 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
