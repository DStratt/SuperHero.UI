import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  // Set url to controller name, from API project
  private url = "SuperHero";

  constructor(private http: HttpClient) { }

  // // Initial method used to test functionality
  // public getSuperHeroes() : SuperHero[] {

  //   // Dummy object used to test initial functionality
  //   let hero = new SuperHero();
  //   hero.id = 1;
  //   hero.name = "Spider Man";
  //   hero.firstName = "Peter";
  //   hero.lastName = "Parker";
  //   hero.place = "New York City";
  //   return [hero];

  // }

  public getSuperHeroes() : Observable<SuperHero[]> {
    // Note the backticks in the path below
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateHero(hero: SuperHero) : Observable<SuperHero[]> {
    // Note the backticks in the path below
    return this.http.put<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }

  public createHero(hero: SuperHero) : Observable<SuperHero[]> {
    // Note the backticks in the path below
    return this.http.post<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }

  public deleteHero(hero: SuperHero) : Observable<SuperHero[]> {
    // Note the backticks in the path below
    return this.http.delete<SuperHero[]>(
      `${environment.apiUrl}/${this.url}/${hero.id}`
    );
  }

}
