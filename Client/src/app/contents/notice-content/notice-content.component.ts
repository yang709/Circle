import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-notice-content',
  templateUrl: './notice-content.component.html',
  styleUrls: ['./notice-content.component.css']
})
export class NoticeContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  msgs: Message[] = [];

  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
  }

  showInfo() {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
  }

  showWarn() {
    this.msgs = [];
    this.msgs.push({severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'});
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
  }

  showMultiple() {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Message 1', detail:'PrimeNG rocks'});
    this.msgs.push({severity:'info', summary:'Message 2', detail:'PrimeUI rocks'});
    this.msgs.push({severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'});
  }

  clear() {
    this.msgs = [];
  }
}
