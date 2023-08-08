import { Component, OnInit } from '@angular/core';
import { TaiwanMarketReportService } from 'src/app/core/service/api/taiwan-market-report.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userName!: string;
  public weightedIndexTW!: string;


  constructor(private marketReportService: TaiwanMarketReportService) { }

  ngOnInit(): void {
    this.getUserName();
    this.marketReportService.getMarketReport().subscribe((data) => {
      this.getStockDataTW(data);
    });
  }

  public getUserName(): string {
    this.userName = '胡克里斯胡';
    return this.userName;
  }

  public getStockDataTW(data: any): void {
    console.warn('所有大盤統計資訊:', data);
    const taiwanMain = data[1];
    this.weightedIndexTW = taiwanMain['收盤指數'];
  }

}
