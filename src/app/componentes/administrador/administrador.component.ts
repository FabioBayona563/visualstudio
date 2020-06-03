import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Respuestacons } from 'src/app/dtos/respuestacons';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  [x: string]: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

opc1()
  {
      this.router.navigate(['opc1']);
  }
RegisEquiOfi()
  {
      this.router.navigate(['RegisEquiOfi']);
  }
vertorneos()
  {
      this.router.navigate(['consultas']);
  }
lobby()
{
    this.router.navigate(['lobby'])
}
consultas() 
  {
    this.router.navigate(['EquiCons'])
  }
}
