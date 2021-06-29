import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDesktopComponent } from './windows11/main-desktop/main-desktop.component';

const routes: Routes = [
  {
    path: '',
    component: MainDesktopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
