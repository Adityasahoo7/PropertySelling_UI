import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PropertiesRoutingModule } from './properties-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AddComponent } from './pages/add/add.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { VisitRequestComponent } from './pages/visit-request/visit-request.component';
import { VisitRequestSellerComponent } from './pages/visit-request-seller/visit-request-seller.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent,
    DetailComponent,
    AddComponent,
    ProfileComponent,
    VisitRequestComponent,
    VisitRequestSellerComponent,
    SearchResultsComponent,
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PropertiesRoutingModule,
    SharedModule   
 
  ]
})
export class PropertiesModule {}
