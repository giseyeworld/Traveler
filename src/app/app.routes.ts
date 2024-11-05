// import { DASHBOARD_ROUTES } from './dashboard/dashboard.routes';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
// import { DASHBOARD_ROUTES } from './components/DASHBOARD_ROUTES';



export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path : 'about', component:AboutComponent}, 
  {path : 'blog', component:BlogComponent}, 
  {path : 'dashboard', component:DashboardComponent}, 
  {path : 'contact', component:ContactComponent}, 
  {path : 'register', component:RegisterComponent}, 
  
  // ...DASHBOARD_ROUTES,

  { path: "", pathMatch : "full", redirectTo: "register" },
  { path: '**', redirectTo: 'empty' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }