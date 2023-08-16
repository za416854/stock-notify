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
<<<<<<< HEAD
    this.userName = '克里斯';
=======
    this.userName = '胡克里斯';
>>>>>>> ba60dc010e0ba83a8105423705bbbf0e03cf34da
    return this.userName;
  }

  public getStockDataTW(data: any): void {
    console.warn('所有大盤統計資訊:', data);
    const taiwanMain = data[1];
    this.weightedIndexTW = taiwanMain['收盤指數'];
  }

}
