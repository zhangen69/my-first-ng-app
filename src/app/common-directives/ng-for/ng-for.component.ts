import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  productList = [
    { name: 'Sony', price: 3000 },
    { name: 'iPhone', price: 4000 },
    { name: 'Samsung', price: 3500 },
    { name: 'Huawei', price: 4500 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
