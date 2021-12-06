import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConfirmData } from './confirm-dialogue';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private message = new Subject<ConfirmData>();
  message$ = this.message.asObservable();

  constructor() { }

  sendMessage(data:ConfirmData) {
    this.message.next(data);
  }
}
