import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/dtos/entrada';
import { OperacionesService } from 'src/app/servicios/operaciones.service';
import { Respuestat } from 'src/app/dtos/respuestat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  [x: string]: any;
  entradas: Entrada[];
  mirespuesta : Respuestat;
  constructor(private servicio: OperacionesService,private router: Router ) { 
    this.cargarDatos();
  }

  ngOnInit(): void {
  }
  volverAd(){
    this.router.navigate(['admin']);
  }
  salir(){
    this.router.navigate(['admin']);
  }
  cargarDatos(): void{
    const valor = this.servicio.consultar();
    valor.then
    (
      (value: Respuestat)=>
      {
        this.mirespuesta = value;
        if(this.mirespuesta.codigo === 0)
        {
          this.entradas = this.mirespuesta.entradas;
        }else{
          alert("no hay datos que obtener")
        }
      }
    );
  }
}
