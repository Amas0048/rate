import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.css']
})
export class ExchangeFormComponent implements OnInit {

  naira:number = 0;
  dollar:number = 0;
  exRate:number = 360;

  constructor() { }

  ngOnInit() {
  }

  calNaira(){
    this.naira = this.exRate * this.dollar;
  }

  calDollar(){
    this.dollar = this.exRate / this.naira;
  }

  calExchange(){
    this.naira = this.exRate * this.dollar;

  }

  calBoth(){
    this.calNaira();
    this.calDollar();
  }

  print(){
    alert(`${this.naira} Naira is ${this.dollar} US dollars`)
  }

}
