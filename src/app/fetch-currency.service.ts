import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchCurrencyService {
  constructor(private http: HttpClient) {}

  getBeer(original_curr: string) {
    return this.http.get(
      `https://api.exchangeratesapi.io/latest?base=${original_curr}`
    );
  }
}
