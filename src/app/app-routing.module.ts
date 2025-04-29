import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // so the application can have routing capability.
import { HeroesComponent } from './heroes/heroes.component'; // gives router somewhere to go once you configure the routes.
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent}, // path: a string that matches the url in the browser address bar. Component: The component that the router should create when navigating to this route..
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // method is called forRoot() because you configure the router at the applications root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
  exports: [RouterModule]
})
export class AppRoutingModule { }
