import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { MessageComponent } from './components/message/message.component';
import { MessageDetailsComponent } from './components/message-details/message-details.component';
import { NewMessageComponent } from './pages/new-message/new-message.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [DashboardComponent,
     MessagesListComponent,
      MessageComponent, MessageDetailsComponent,
       NewMessageComponent, MessageFormComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ScrollingModule
  ]
})
export class DashboardModule { }
