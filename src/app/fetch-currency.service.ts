import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchCurrencyService {

  constructor(private http: HttpClient) { }

  getBeer(original_curr: string){
    // var settings = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url": `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${original_curr}&to=${desired_curr}&amount=${amt}`,
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
    //     "x-rapidapi-key": "432cb85f3emshd2e70eeb3556d3bp144a56jsn06cbcafb135e"
    //   }
    // }
    // console.log(settings);
    console.log("howdy")
    return this.http.get(`https://api.exchangeratesapi.io/latest?base=${original_curr}`)
     
    }
}
