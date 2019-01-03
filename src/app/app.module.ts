import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// our components so the app can recognize them and utilize them
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';

// AppRoutingModule for our routes to work across the app
import { AppRoutingModule } from './app.routing';
import { RegisterComponent } from './components/register/register.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    MainNavComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
