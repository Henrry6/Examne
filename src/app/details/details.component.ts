import { Component, OnInit, Input } from '@angular/core';
import {InvoicesDetails} from '../inovices'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() invoice: InvoicesDetails| null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
