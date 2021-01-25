import { Component, OnInit } from '@angular/core';
import {FACTURAS} from '../mock-facturas';
import {InvoicesDetails} from '../inovices'



@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  invoices = FACTURAS
  selectedFact: InvoicesDetails| null = null;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(invoice: InvoicesDetails): void {
    this.selectedFact = invoice;
  }

}
