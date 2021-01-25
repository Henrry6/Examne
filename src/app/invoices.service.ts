import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { InvoicesDetails } from './inovices';
import { FACTURAS } from './mock-facturas';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class InvoicesService {

  constructor(private messageService: MessageService) { }

  getFacturas(): Observable<InvoicesDetails[]> {
    this.messageService.add('Mensaje del servicio');
    return of(FACTURAS);
  }
}