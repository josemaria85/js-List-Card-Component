import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicioDatosService } from 'src/app/Servicio/servicio-datos.service';

@Component({
  selector: 'js-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {
  @Input() Datos:any;
  @Input() titulo:any;
  @Output () ver: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  Ver(dato:any){
    let data:any={
      "operacion":"Ver",
      "dato":dato
    }
    this.ver.emit(data);
  }
  Editar(dato:any){
    let data:any={
      "operacion":"Editar",
      "dato":dato
    }
    this.ver.emit(data);
  }
  Borrar(dato:any){
    let data:any={
      "operacion":"Borrar",
      "dato":dato
    }
    this.ver.emit(data);
  }
}
