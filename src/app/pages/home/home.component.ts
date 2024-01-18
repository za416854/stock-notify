import { Component, OnInit } from '@angular/core';
import { TaiwanMarketReportService } from 'src/app/core/service/api/taiwan-market-report.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userName!: string;
  public taiwanIdxName!: string;
  public taiwanIdx!: string;
  public affectedPoints!: string;
  public affectedPercentage!: string;


  constructor(private marketReportService: TaiwanMarketReportService) { }

  ngOnInit(): void {
    this.getUserName();
    this.marketReportService.getMarketReport().subscribe((data) => {
      this.getStockDataTW(data);
    });
  }

  public getUserName(): string {
    this.userName = '克里斯胡';
    return this.userName;
  }

  public getStockDataTW(data: any): void {
    const taiwanMarket = data['result'];
    console.warn('所有大盤統計資訊:', taiwanMarket);
    console.warn('taiwanMain物件:', JSON.parse(taiwanMarket)[1]['指數']);
    this.taiwanIdxName = JSON.parse(taiwanMarket)[1]['指數'];
    console.warn('taiwanMain物件:', JSON.parse(taiwanMarket)[1]['收盤指數']);
    this.taiwanIdx = JSON.parse(taiwanMarket)[1]['收盤指數'];
    this.affectedPoints = JSON.parse(taiwanMarket)[1]['漲跌點數'];
    this.affectedPercentage = JSON.parse(taiwanMarket)[1]['漲跌百分比'];
  }

}
