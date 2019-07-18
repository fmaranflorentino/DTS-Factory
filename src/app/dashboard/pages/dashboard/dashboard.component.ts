import { Component, OnInit } from '@angular/core';
import { MessagesList } from 'src/app/shared/models/messages-list.interface';
import { Observable } from 'rxjs';

import { MessagesService } from 'src/app/shared/services/messages/messages.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
    private messages$: MessagesService
  ) { }

  async ngOnInit() {
    await this.getAllMessages();
  }

  getAllMessages() {
    return new Promise((resolve, reject) => {
      this.messages$
        .getAllMessages()
        .subscribe(resp => {
          this.messagesList = resp;
          console.log('buc', this.messagesList);
          resolve();
        },
        error => {
          reject();
        });
    });
  }

  handleMessageDetail(event) {
    this.selectedMessage = this.messagesList
      .filter(message => message.id === event)[0];
  }

}
