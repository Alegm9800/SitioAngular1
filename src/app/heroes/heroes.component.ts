import { Component, OnInit } from '@angular/core';
import {Hero} from '/Users/Alex/SitioAngular1/src/app/hero';

import{HEROES} from '/Users/Alex/SitioAngular1/src/app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

}
