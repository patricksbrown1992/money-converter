import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currencies: any = ["AUD", "BGN", "BRL", "CAD","CHF","CNY","CZK","DKK","EUR","GBP","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PLN","RON","RUB","SEK","SGD","THB","TRY","USD","ZAR"]

  constructor(public fb: FormBuilder) { }

  originalCurrenciesForm = this.fb.group({
    name: ['']
  })

  desiredCurrenciesForm = this.fb.group({
    name: ['']
  })

  original_currency: string = ''
  desired_currency: string = ''

  onSubmitOriginalCurr() {
    this.original_currency = this.originalCurrenciesForm.value.name;
  }
  onSubmitDesiredCurr() {
    this.desired_currency = this.desiredCurrenciesForm.value.name;
  }
}
