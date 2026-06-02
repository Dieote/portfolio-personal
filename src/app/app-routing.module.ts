import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceComponent } from './components/experience/experience.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
