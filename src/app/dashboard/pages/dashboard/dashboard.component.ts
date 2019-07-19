import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MessagesList } from 'src/app/shared/models/messages-list.interface';

import { MessagesService } from 'src/app/shared/services/messages/messages.service';
import { SkeletonService } from 'src/app/shared/services/skeleton/skeleton.service';

import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  messagesList: MessagesList[] = [
    {
      id: 1,
      userName: 'Flávio',
      userEmail: 'email@email.com',
      message: {
        registryDateTime: 'data',
        messageSubject: 'Assunto',
        messageText: 'texto',
        messageTitle: 'messageTitle1'
      }
    },
    {
      id: 2,
      userName: 'Flávio',
      userEmail: 'email@email.com',
      message: {
        registryDateTime: 'data',
        messageSubject: 'Assunto',
        messageText: 'texto',
        messageTitle: 'messageTitle'
      }
    },
    {
      id: 3,
      userName: 'Flávio',
      userEmail: 'email@email.com',
      message: {
        registryDateTime: 'data',
        messageSubject: 'Assunto',
        messageText: 'texto',
        messageTitle: 'messageTitle'
      }
    },
    {
      id: 4,
      userName: 'Flávio',
      userEmail: 'email@email.com',
      message: {
        registryDateTime: 'data',
        messageSubject: 'Assunto',
        messageText: 'texto',
        messageTitle: 'messageTitle'
      }
    },
    {
      id: 5,
      userName: 'Flávio',
      userEmail: 'email@email.com',
      message: {
        registryDateTime: 'data',
        messageSubject: 'Assunto',
        messageText: 'texto',
        messageTitle: 'messageTitle'
      }
    }
  ];
  selectedMessage;


  constructor(
    private messages$: MessagesService,
    private skeleton$: SkeletonService
  ) { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    await this.skeleton$
      .sewtInitialState();

    this.getAllMessages();
  }

  getAllMessages() {
    return new Promise((resolve, reject) => {
      this.skeleton$
        .toggleSkeletonStatus();
      setTimeout(() => {
        this.messages$
          .getAllMessages()
          .subscribe(resp => {
            this.messagesList = resp;
            this.skeleton$
              .toggleSkeletonStatus();
            resolve();
          },
            error => {
              reject();
            });
      }, 1000);

    });
  }

  handleMessageDetail(event) {
    this.selectedMessage = this.messagesList[event];
  }

  get dateFormated() {
    return moment(this.selectedMessage.message.registryDateTime).format('DD/MM/YYYY HH:MM');
  }

}
