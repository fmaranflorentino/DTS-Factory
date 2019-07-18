import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/shared/services/messages/messages.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  constructor(
    private messages$: MessagesService
  ) { }

  ngOnInit() {
  }

  handleNewMessage(e) {
    this.messages$
      .addNewMessage(e)
      .subscribe(resp => console.log(resp))
  }

}
