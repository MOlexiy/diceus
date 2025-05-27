import { Component, Input } from '@angular/core';
import { DashboardData } from '../../interfaces/app.interfaces';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-my-account',
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: 'my-account.component.html',
  styleUrl: 'my-account.component.scss'
})
export class MyAccountComponent {
  @Input() accountData: DashboardData['myAccounts'] =
    {} as DashboardData['myAccounts'];

  getWinnabilityDots(count: number): number[] {
    return Array(count).fill(0);
  }
}
