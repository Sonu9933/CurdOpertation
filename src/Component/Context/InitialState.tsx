// Car type
export type Car = {
  Id: number;
  Company: string;
  Model: string;
  ManufactureDate: string;
};

// State class
export class CarInitialState {
  cars: Car[];
  carResult: Car[];

  constructor() {
    this.cars = [];
    this.carResult = [];
  }
}