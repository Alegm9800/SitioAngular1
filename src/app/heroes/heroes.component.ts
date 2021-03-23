import { Component, OnInit } from '@angular/core';
import {Hero} from '/Users/Alex/SitioAngular1/src/app/hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero ={
    id: 1,
    name: 'SpiderMan',
    edad: 23,
    superpower: "Trepar muros, telaraña, fuerza sobrehumana",
    identify: "Peter Parker",
    universe: "Marvel"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
