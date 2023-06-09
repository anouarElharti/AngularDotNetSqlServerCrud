import { Component } from '@angular/core';
import { SuperHero } from './models/SuperHero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SuperHeroUI';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {
    this.superHeroService
      .getSuperHeroes()
      .subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  initNewHero() {
    this.heroToEdit = new SuperHero();
  }

  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }
}
