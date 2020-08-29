import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import {FetchCurrencyService} from './fetch-currency.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currencies: any = ["AUD", "BGN", "BRL", "CAD","CHF","CNY","CZK","DKK","EUR","GBP","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PLN","RON","RUB","SEK","SGD","THB","TRY","USD","ZAR"]

  constructor(public fb: FormBuilder, private _http: FetchCurrencyService) { }

  originalCurrenciesForm = this.fb.group({
    name: ['']
  })

  desiredCurrenciesForm = this.fb.group({
    name: ['']
  })

  original_currency: any = ''
  desired_currency: any = ''
  amount: any = '';
  ans: any

  onSubmitOriginalCurr() {
    this.original_currency = this.originalCurrenciesForm.value.name;
  }
  onSubmitDesiredCurr() {
    this.desired_currency = this.desiredCurrenciesForm.value.name;
  }

  onClick(){
    // fetch(`https://api.exchangeratesapi.io/latest?symbols=${this.original_currency},${this.desired_currency}`).then((res) => console.log(res))
    // this.ans = this._http.myMethod(this.original_currency, this.desired_currency, parseInt(this.amount))
    // console.log(this.ans)
    this._http.getBeer(this.original_currency).subscribe(data => {
      this.ans = data["rates"][this.desired_currency] * parseInt(this.amount)
      console.log(this.ans.toFixed(2));
      
    }
  );
  // this._http.getBeer(this.original_currency, this.desired_currency, parseInt(this.amount))
  }

  
}
