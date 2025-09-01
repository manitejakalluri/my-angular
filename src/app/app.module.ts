import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WelcomComponent } from './welcom/welcom.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalcultorComponent } from './calcultor/calcultor.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
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
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutUsModule } from './about-us/about-us.module';
import { UpiComponent } from './upi/upi.component';
import { CardComponent } from './card/card.component';
import { CodComponent } from './cod/cod.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    GalleryComponent,
    WelcomComponent,
    DataBindingComponent,
    CalcultorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DirectivesComponent,
    EmployeeComponent,
    ProductsComponent,
    VehiclesComponent,
    FlipkartComponent,
    MailComponent,
    PinterestComponent,
    WeatherComponent,
    CreatevehicleComponent,
    IdcardComponent,
    NewidcardComponent,
    AccountdetailsComponent,
    CreateuserComponent,
    VehicleDetailsComponent,
    IdcardDetailsComponent,
    Sibling1Component,
    Sibling2Component,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    AboutCeoComponent,
    AboutCompanyComponent,
    UpiComponent,
    CardComponent,
    CodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
