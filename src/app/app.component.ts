import { Component } from '@angular/core';
import { OperacionesService } from './servicios/operaciones.service';
import { Respuesta } from './entidades/respuesta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  [x: string]: any;
  title = 'PRUEBA';
  id: number;
  nombre: String;
  ciudad: String;
  fecha: String;
  mirespuesta: Respuesta;




  constructor(private servicio: OperacionesService) {

  }
  

  llamar() {

    
    if (this.id=== undefined||this.nombre === undefined || this.ciudad === undefined || this.fecha=== undefined){
      alert('Los datos estan vacios');
      return ;
    }
    const x: Promise<Respuesta> =  this.servicio.autenticar(this.id,this.nombre, this.ciudad, this.fecha);
    if(this.id===this.id||this.nombre === this.nombre|| this.ciudad === this.ciudad || this.fecha === this.fecha){
      alert('Fue efectuado el registro del torneo');
      return;
    }
    const y: Promise<Respuesta> =  this.servicio.autenticar(this.id,this.nombre, this.ciudad, this.fecha);
    x.then((value: Respuesta) => {
      this.mirespuesta = value;
      if  (this.mirespuesta !== undefined && this.mirespuesta.mensajeE === "Valores validos"){
        alert ('Registro correcto');
      }else {
        alert ('Registro incorrecto');
      }

    });


    
  }
}
