import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DashboardData, IAccount, IData } from '../interfaces/app.interfaces';
import { WorkQueueComponent } from '../shared/work-queue/work-queue.component';
import { PortfolioGoalsComponent } from '../shared/portfolio-goals/portfolio-goals.component';
import { MarketIntelligenceComponent } from '../shared/market-intelligence/market-intelligence.component';
import { MyAccountComponent } from '../shared/my-account/my-account.component';

@Component({
  selector: 'app-account',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  imports: [NgIf, WorkQueueComponent, PortfolioGoalsComponent, NgForOf, MarketIntelligenceComponent, MyAccountComponent]
})
export class DashboardComponent implements OnInit {
  dashboardData: DashboardData = {} as DashboardData;
  account: IAccount = {} as IAccount;
  actions = [
    { label: 'New Submission', action: () => console.log('New Submission') },
    { label: 'Quote Builder', action: () => console.log('Quote Builder') },
    { label: 'Risks Models', action: () => console.log('Risks Models') },
    { label: 'Documents Upload', action: () => console.log('Documents Upload') }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    try {
      this.http.get<IData>('assets/mock/data.json').subscribe((data) => {
        this.dashboardData = data.dashboard;
        this.account = data.menu.accounts;
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleClick(actionFn: () => void) {
    actionFn();
  }
}
