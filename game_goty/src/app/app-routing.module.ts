import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';

// Enrutamos lo componentes en el path para la url
const routes: Routes = [
  {path: 'inicio',component : InicioComponent},
  {path: 'goty' , component: GotyComponent },
  //Tenemos en cuenta cualquier otro tipo de direccionamienro que no este dentro del path
  //para redireccionar a la pagina de inicio
  {path : '**' , pathMatch : 'full', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
