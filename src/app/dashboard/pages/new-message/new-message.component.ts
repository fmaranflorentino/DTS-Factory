import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/shared/services/messages/messages.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  sending = false;

  constructor(
    private messages$: MessagesService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  handleNewMessage(e) {
    this.sending = true;
    this.messages$
      .addNewMessage(e)
      .subscribe(() => {
        this.sending = false;

        const config: MatSnackBarConfig = {
          duration: 3 * 1000
        };

        this.snackbar.open('Mensagem enviada com sucesso!', null, config);
      },
        err => {
          this.sending = false;
        });
  }

}
