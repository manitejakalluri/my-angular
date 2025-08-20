import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WelcomComponent } from './welcom/welcom.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalcultorComponent } from './calcultor/calcultor.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [

  {path:'',component:LoginComponent},//default routing
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    // {path:'gallery',component:GalleryComponent},
    {path:'welcome',component:WelcomComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calcultor',component:CalcultorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'products',component:ProductsComponent},
  ]},//parent routing

  {path:'',component:ErrorComponent}, //wild card /error routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
