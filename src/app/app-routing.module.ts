import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './Persona/ingresar/ingresar.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { ModificarComponent } from './Persona/modificar/modificar.component';
import { PersonaComponent } from './Persona/persona/persona.component';
import { IngresarSComponent } from './Service/ingresar-s/ingresar-s.component';
import { ListarSComponent } from './Service/listar-s/listar-s.component';
import { ModificarSComponent } from './Service/modificar-s/modificar-s.component';
import { ServicioComponent } from './Service/servicio/servicio.component';

import { ServiceServicioService } from './Servicio/service.servicio.service';


const routes: Routes = [
  {path:"persona", component:PersonaComponent},
  {path:"listarPersonas", component: ListarComponent},
  {path:"ingresarPersonas", component: IngresarComponent},
  {path:"modificarPersonas", component: ModificarComponent},
  {path:"servicio", component: ServicioComponent},
  {path:"ingresarServicio", component: IngresarSComponent},
  {path:"modificarServicio", component: ModificarSComponent},
  {path:"listarServicio", component: ListarSComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
