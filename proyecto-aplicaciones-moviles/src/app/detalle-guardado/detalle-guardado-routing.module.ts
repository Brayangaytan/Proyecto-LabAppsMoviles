import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleGuardadoPage } from './detalle-guardado.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleGuardadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleGuardadoPageRoutingModule {}
