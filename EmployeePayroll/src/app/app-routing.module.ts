import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './component/form/form.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"form", component:FormComponent},
  {path:"update/:id", component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
