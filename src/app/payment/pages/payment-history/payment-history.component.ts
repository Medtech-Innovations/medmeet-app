import { Component } from '@angular/core';
import { PaymentService} from "../../../shared/services/payment.service";


@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent {
  constructor(
    private paymentService: PaymentService
  ) {}
  displayedColumns: string[] = [
    'id',
    // 'paymentDate',
    // 'paymentTime',
    'paymentAmount',
    'paymentDescription'
  ];

  dataSource: any;

  payments: any = [];

  ngOnInit() {
    this.paymentService.getAll().subscribe(data => {
      this.payments = data;
      this.dataSource = this.payments;
    });
  }

}
