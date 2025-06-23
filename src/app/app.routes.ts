import { Routes } from '@angular/router';
import { UserTemplateDrivenComponent } from './components/user-template-driven/user-template-driven.component';
import { PersonReactiveComponent } from './components/person-reactive/person-reactive.component';
import { PlayerFormBuilderComponent } from './components/player-form-builder/player-form-builder.component';
import { ProductDynamicComponent } from './components/product-dynamic/product-dynamic.component';
import { EmployeeStandaloneComponent } from './components/employee-standalone/employee-standalone.component';
import { OrderTypedComponent } from './components/order-typed/order-typed.component';
import { CategoryCvaSignalsComponent } from './components/category-cva-signals/category-cva-signals.component';

export const routes: Routes = [
  { path: 'user', component: UserTemplateDrivenComponent },
  { path: 'person', component: PersonReactiveComponent },
  { path: 'player', component: PlayerFormBuilderComponent },
  { path: 'product', component: ProductDynamicComponent },
  { path: 'employee', component: EmployeeStandaloneComponent },
  { path: 'order', component: OrderTypedComponent },
  { path: 'category', component: CategoryCvaSignalsComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
];