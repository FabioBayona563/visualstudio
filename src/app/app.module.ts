import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacionComponent } from './componentes/autenticacion/autenticacion.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { EquipregisComponent } from './componentes/equipregis/equipregis.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { RegistorneoComponent } from './componentes/registorneo/registorneo.component';
import { DatosComponent } from './componentes/datos/datos.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { AsignacionComponent } from './componentes/asignacion/asignacion.component';
import { ReginscripComponent } from './componentes/reginscrip/reginscrip.component';
import { EntradaComponent } from './componentes/entrada/entrada.component';
import {TableModule} from 'primeng/table';
import { RegistroExterComponent } from './componentes/registro-exter/registro-exter.component';
import { TorneostoComponent } from './componentes/torneosto/torneosto.component';
import { OficialregisComponent } from './componentes/oficialregis/oficialregis.component';
import { TabladatosComponent } from './componentes/tabladatos/tabladatos.component';
import { OperacionesService } from './servicios/operaciones.service';

  

const appRouters :Routes =[
  {path:'',component : PrincipalComponent },
  {path:'boton',component : AutenticacionComponent},
  {path:'opc1',component : RegistorneoComponent},
  {path:'administrador', component : AdministradorComponent},
  {path: '', component: AutenticacionComponent},
  {path: 'inicio', component: AutenticacionComponent},
  {path: 'datos', component: DatosComponent},
  {path: 'consulta', component: ConsultasComponent},
  {path: 'asignacion', component: AsignacionComponent},
  {path: 'boton',component:AutenticacionComponent},
  {path: 'volver',component:PrincipalComponent},
  {path: 'sesion',component:AdministradorComponent},
  {path: 'admin',component:AdministradorComponent},
  {path: 'lobby',component:PrincipalComponent},
  {path: 'ingresar',component:AdministradorComponent},
  {path: 'reginscrip',component:ReginscripComponent},
  {path: 'consultas',component:EntradaComponent},
  {path: 'volverAd',component:AdministradorComponent}, 
  {path: 'EquiCons',component:ConsultasComponent},
  {path: 'torneos',component:TorneostoComponent},
  {path: 'RegisEquiOfi',component:OficialregisComponent},
  {path: 'fec',component:RegistroExterComponent},
  {path: 'RegisOfi',component:TabladatosComponent}
]

 
@NgModule({
  declarations: [
    AppComponent,
    AutenticacionComponent,
    EquipregisComponent,
    AdministradorComponent,
    RegistorneoComponent,
    AutenticacionComponent,
    DatosComponent,
    PrincipalComponent,
    ConsultasComponent,
    AsignacionComponent,
    AdministradorComponent,
    AdministradorComponent,
    ReginscripComponent,
    EntradaComponent,
    RegistroExterComponent,
    TorneostoComponent,
    OficialregisComponent,
    TabladatosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,

    RouterModule.forRoot(appRouters)
  ],
  providers: [OperacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
