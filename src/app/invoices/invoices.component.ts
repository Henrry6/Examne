import { Component, OnInit } from '@angular/core';
import {InvoicesDetails} from '../inovices'
import { MessageService } from '../message.service';
import { InvoicesService } from '../invoices.service' 


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  invoices: InvoicesDetails[] | null = null;
  selectedFact: InvoicesDetails| null = null;

  constructor(private InvoicesService: InvoicesService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getFacturas();
  }
  onSelect(invoice: InvoicesDetails): void {
    this.selectedFact = invoice;
    this.messageService.add(`Factura: Seleccionada id=${invoice.id}`)
  }
  getFacturas(): void {
    this.InvoicesService.getFacturas()
      .subscribe(inovices => this.invoices = inovices)
  }

}
