import { Injectable } from '@angular/core';
import { SuperHero } from '../models/SuperHero';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  constructor() {}

  public getSuperHeroes(): SuperHero[] {
    let hero = new SuperHero();
    hero.id = 1;
    hero.name = 'Spiderman';
    hero.firstName = 'Peter';
    hero.lastName = 'Parker';
    hero.place = 'New York City';
    return [hero];
  }
}
