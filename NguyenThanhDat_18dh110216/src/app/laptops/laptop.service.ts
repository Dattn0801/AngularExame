import { Laptop } from './laptop.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaptopService {
  private LaptopData: Laptop[] = [
    {
      id: 'CR001',
      name: 'Toyota 2020',
      price: 2500,
      description: 'Toyotaaaaa Carrrr',
    },
    {
      id: 'CR002',
      name: 'Yamaha 2020',
      price: 2000,
      description: 'Yamaha Carrr',
    },
    {
      id: 'CR003',
      name: 'Honda 2020',
      price: 3000,
      description: 'Honda Carr',
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
