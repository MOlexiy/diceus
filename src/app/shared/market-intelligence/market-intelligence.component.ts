import { Component, Input } from '@angular/core';
import { DashboardData } from '../../interfaces/app.interfaces';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-market-intelligence',
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: 'market-intelligence.component.html',
  styleUrl: 'market-intelligence.component.scss',
})
export class MarketIntelligenceComponent {
  @Input() marketData: DashboardData['marketIntelligence'] =
    {} as DashboardData['marketIntelligence'];
}
