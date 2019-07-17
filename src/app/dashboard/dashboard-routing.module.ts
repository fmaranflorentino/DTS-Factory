import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewMessageComponent } from './pages/new-message/new-message.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'new-message', component: NewMessageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
