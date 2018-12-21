import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(ROUTES);