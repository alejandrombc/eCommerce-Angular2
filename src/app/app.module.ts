import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rutas
import {app_routing} from "./app.routes"

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';
import { FeedProdComponent } from './feed-prod/feed-prod.component';
import { FiltersComponent } from './filters/filters.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProductComponent } from './product/product.component';
import { PrepurcharseComponent } from './prepurcharse/prepurcharse.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BillComponent } from './bill/bill.component';
import { GlobalService } from './globals.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FeedProdComponent,
    FiltersComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    PerfilComponent,
    ProductComponent,
    PrepurcharseComponent,
    CheckoutComponent,
    BillComponent,
    UpdateProductComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    app_routing
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
