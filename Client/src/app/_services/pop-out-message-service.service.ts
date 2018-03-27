import { Injectable } from '@angular/core';
import {Message} from 'primeng/primeng';
@Injectable()
export class PopOutMessageServiceService {
  constructor() { }
  showSuccess(msgs: Message[], printDetail: string) {
    msgs = [];
    msgs.push({severity: 'success', summary: 'Success Message', detail: printDetail});
  }

  showInfo(msgs: Message[], printDetail: string) {
    msgs = [];
    msgs.push({severity: 'info', summary: 'Info Message', detail: printDetail});
  }

  showWarn(msgs: Message[], printDetail: string) {
    msgs = [];
    msgs.push({severity: 'warn', summary: 'Warn Message', detail: printDetail});
  }

  showError(msgs: Message[], printDetail: string) {
    msgs = [];
    msgs.push({severity: 'error', summary: 'Error Message', detail: printDetail});
  }

  showMultiple() {
    /*this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks'});
    this.msgs.push({severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks'});
    this.msgs.push({severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks'});*/
  }

  clear(msgs: Message[]) {
    setTimeout(() => {
      msgs = [];
    }, 1000); //clear after one second
  }
}
