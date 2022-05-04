import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Person } from '../model/person';

const INIT_DATA: Person[] = [
  {
    name: 'Rowan Nikolaus',
    age: 33,
    email: 'rowan@nikolaus.com.br',
  },
  {
    name: 'Haley Kassandra',
    age: 23,
    email: 'haley@haley.com.br',
  },
  {
    name: 'Rowan Jeff',
    age: 21,
    email: 'rowan@rowan.com.br',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ExampleApiService {
  constructor() {}

  getData(): Observable<Person[]> {
    return of(INIT_DATA).pipe(delay(500));
  }
}
