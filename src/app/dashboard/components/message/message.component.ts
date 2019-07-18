import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input()
  message;

  constructor() { }

  ngOnInit() {
  }

  get dateFormated() {
    return moment(this.message.registryDateTime).format('DD/MM/YYYY HH:MM');
  }

}
