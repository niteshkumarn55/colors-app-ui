import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsComponent } from './colors.component';
import { ColComponent } from './col/col.component';

const routes: Routes = [{
  path: '',
  component: ColorsComponent,
  children:[{
    path:'submit',
    component:ColComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorsRoutingModule { }
