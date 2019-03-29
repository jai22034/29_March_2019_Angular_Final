import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { BodyComponent } from './body/body.component';
const routes: Routes = [
 {
   path: '',
   component: HomeComponent ,
 } ,
 {
   path: 'Home',
   component: HomeComponent ,
 } ,
 {
  path: 'Register',
  component: RegisterComponent ,
 },
 {
  path: 'Body',
  component: BodyComponent ,
 },
 {
  path: '**',
  component: NotFoundComponent ,
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, RegisterComponent , BodyComponent , NotFoundComponent];
