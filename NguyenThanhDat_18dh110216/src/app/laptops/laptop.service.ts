import { Laptop } from './laptop.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaptopService {
  private LaptopData: Laptop[] = [
    {
      id: 'MB001',
      name: 'IPhone 12 ProMax',
      price: 1200,
      description: 'Iphone 12 ProMax 256g max option',
    },
    {
      id: 'MB002',
      name: 'SamSung S21',
      price: 2000,
      description: 'SamSung 256g max option',
    },
    {
      id: 'MB003',
      name: 'Redmi Note 10S',
      price: 3000,
      description: 'Redmi Note 256g max option',
    },
  ];
  constructor() {}

  get List() {
    return of<Laptop[]>(this.LaptopData);
  }

  getLaptop(index: number) {
    return this.LaptopData[index];
  }

  addLaptop(laptop: Laptop) {
    this.LaptopData.push(laptop);
  }

  updateLaptop(index: number, newLap: Laptop) {
    this.LaptopData[index] = newLap;
  }

  deleteLaptop(index: number) {
    this.LaptopData.splice(index, 1);
  }
}
