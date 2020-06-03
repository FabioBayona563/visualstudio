import { Component, OnInit } from '@angular/core';
import { OperacionesService } from 'src/app/servicios/operaciones.service';
import { Router } from '@angular/router';
import { Respuestacons } from 'src/app/dtos/respuestacons';
import {TableModule} from 'primeng/table';
import { Entradaa } from 'src/app/dtos/entradaa';
import { Consulequi } from 'src/app/dtos/consulequi';




@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})

export class ConsultasComponent implements OnInit {
  [x: string]: any;


  consulta: Consulequi[];
  mirespuesta : Respuestacons;
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
    const valor = this.servicio.consultarEqui();
    valor.then
    (
      (value: Respuestacons)=>
      {
        this.mirespuesta = value;
        alert(value);
        if(this.mirespuesta.codigo === 0)
        {
          
          this.consulta = this.mirespuesta.consulta;
        }else{
          alert("no hay datos que obtener")
        }
      }
    ).catch(err=>{
      console.log(err)
    });
  }
}
