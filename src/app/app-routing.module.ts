import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './views/web/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  /* { path: 'administrador/sede', component: SedeComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
