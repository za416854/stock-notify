import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APITree } from 'src/app/common/config';


@Injectable({
  providedIn: 'root'
})
export class TaiwanMarketReportService {

  constructor(private http: HttpClient) { }

  getMarketReport(): Observable<any> {
    console.group('====每日收盤行情-大盤統計資訊====');
    //const apiUrl = environment.apiUrl + '/api/TaiwanMarket';
    const apiUrl = APITree.path.api.TaiwanStock.get_GetTaiwanMarket;
    console.log('url:', apiUrl);
    console.groupEnd();
    // return this.http.get<any>(apiUrl);
    return this.http.get<any>(apiUrl);
  }
}
