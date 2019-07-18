import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MessagesList } from 'src/app/shared/models/messages-list.interface';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  messageForm: FormGroup;
  formSubjectOptions = [
    'Orçamento',
    'Dúvida',
    'Elogio',
    'Reclamação'
  ];
  @Output()
  newMessage: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.messageForm = new FormGroup({
      name: new FormControl(null,
        {
          validators:
            [
              Validators.required
            ]
        }
      ),
      email: new FormControl(null,
        {
          validators:
            [
              Validators.required,
              Validators.email
            ]
        }
      ),
      phone: new FormControl(null),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null,
        {
          validators: [Validators.required, Validators.maxLength(500)]
        }
      ),
    });
  }

  sendMessage() {
    const newMessage: MessagesList = {
      id: Math.random(),
      userName: this.form.name.value,
      userEmail: this.form.email.value,
      message: {
        messageTitle: this.form.subject.value,
        messageText: this.form.message.value,
        registryDateTime: new Date().toString()
      }
    };

    this.newMessage.emit(newMessage);

  }

  get form() {
    return this.messageForm.controls;
  }

}
