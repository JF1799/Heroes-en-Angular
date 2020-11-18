import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
//import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.sass'],
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSelec: EventEmitter<number>;
  constructor(private router: Router) {
    this.heroeSelec = new EventEmitter();
  }

  ngOnInit(): void {}

  verHeroe() {
    // console.log(this.index);
    this.router.navigate(['/heroe', this.index]);
    // this.heroeSelec.emit(this.index);
  }
}
