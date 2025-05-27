import { Component, Input } from '@angular/core';
import { IAccounts } from '../../interfaces/app.interfaces';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-performance-metrics',
  imports: [NgForOf],
  templateUrl: 'performance-metrics.component.html',
  styleUrl: 'performance-metrics.component.scss',
})
export class PerformanceMetricsComponent {
  @Input() performanceMetrics: IAccounts['performanceMetrics'] =
    {} as IAccounts['performanceMetrics'];
}
