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
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { IdcardComponent } from './idcard/idcard.component';
import { NewidcardComponent } from './newidcard/newidcard.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { IdcardDetailsComponent } from './idcard-details/idcard-details.component';
import { AuthenticationGuard } from './authentication.guard';
import { Sibling1Component } from './sibling1/sibling1.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [

  {path:'',component:LoginComponent},//default routing
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],children:[
    {path:'home',component:HomeComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'welcome',component:WelcomComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calcultor',component:CalcultorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'products',component:ProductsComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'flipkarts',component:FlipkartComponent},
    {path:'mails',component:MailComponent},
    {path:'pinterest',component:PinterestComponent},
    {path:'weather',component:WeatherComponent},
    {path:'createvehile',component:CreatevehicleComponent},
    {path:'idcard',component:IdcardComponent},
    {path:'newidcard',component:NewidcardComponent},
    {path:'accountdetails',component:AccountdetailsComponent},
    {path:'createuser',component:CreateuserComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreatevehicleComponent},
    {path:'idcard-details/:id',component:IdcardDetailsComponent},
    {path:'edit-idcard/:id',component:NewidcardComponent},
    {path:'login',component:LoginComponent},
    {path:'sibling',component:Sibling1Component},
    {path:'parent',component:ParentComponent},

    // {path:'payment',
    //   loadChildren: () => import ('./payments/payments.module')
    //   .then (m => m.PaymentsModule)
    // }
  ]},//parent routing

  {path:'',component:ErrorComponent}, //wild card /error routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
