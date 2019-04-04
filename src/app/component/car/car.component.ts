import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  public car = {
    model: "BMW X6",
    mileage: 0,
    fuelTank: "85л.",
    fuel: 85,

    specifications: [
      "Двигатель 3.0 литра", 
      "Максимальная скорость 250 км/ч", 
      "Разгон 0–100 км/ч, 6.8 сек.", 
      "Собственный вес 2100 кг.",
    ]
  }

  constructor() { }

  ngOnInit() {
  }
  public invisibleRefuel = true;
  public drive() {
    if(this.car.fuel <= 5) {
      this.invisibleRefuel = false;
      return alert('Нужно заправится!')
    }
    
    this.car.mileage += 100;
    this.car.fuel -= 10; 
  }
  public refuel() {
    this.car.fuel = 85;
    this.invisibleRefuel = true;
  }

}
