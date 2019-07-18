import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SkeletonService } from 'src/app/shared/services/skeleton/skeleton.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {
  @Input()
  messagesList: any[];
  @Output()
  messageSelected: EventEmitter<any> = new EventEmitter();
  skeleton = {
    isActive: false,
    items: new Array(7),
    sub: new Subscription()
  };

  constructor(
    private skeleton$: SkeletonService
  ) { }

  ngOnInit() {
    this.skeleton.sub = this.skeleton$
      .getSkeletonStatus()
      .subscribe(resp => {
        console.log('skeleton status', resp);
        this.skeleton.isActive = resp;
      });
  }

  showMessageDetail(index) {
    this.messageSelected
      .emit(index);
  }

}
