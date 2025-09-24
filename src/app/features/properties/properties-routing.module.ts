import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AddComponent } from './pages/add/add.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VisitRequestComponent } from './pages/visit-request/visit-request.component';
import { VisitRequestSellerComponent } from './pages/visit-request-seller/visit-request-seller.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'add', component: AddComponent },
  { path: 'profile',component:ProfileComponent},
   { path: 'visit-requests/buyer', component: VisitRequestComponent },
  { path: 'visit-requests/seller', component: VisitRequestSellerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule {}
