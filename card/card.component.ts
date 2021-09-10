import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'js-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input () dato: any;
  @Input () titulo: any;
  @Input () piefoto: any;
  @Input () enlaces: any;
  keys:any=[];
  @Output () ver: EventEmitter<string> = new EventEmitter();
  @Output () modificar: EventEmitter<string> = new EventEmitter();
  @Output () borrar: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.keys=Object.keys(this.dato);
  }
  Ver(dato:any){
    this.ver.emit(dato);
  }
  Borrar(dato:any){
    this.borrar.emit(dato);
  }
  Editar(dato:any){
    this.modificar.emit(dato);
  }
}
