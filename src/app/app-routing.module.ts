// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { DashboardComponent } from './features/properties/pages/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  // Default → login
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  // Authentication pages
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },

  // Protected routes (login required)
  {
    path: 'properties',
    loadChildren: () =>
      import('./features/properties/properties.module').then(m => m.PropertiesModule),
    canActivate: [AuthGuard]
  },

  // Fallback
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
