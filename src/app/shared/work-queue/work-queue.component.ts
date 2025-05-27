import { Component, Input, OnInit } from '@angular/core';
import { DashboardData, IAccount } from '../../interfaces/app.interfaces';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-work-queue',
  imports: [
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: 'work-queue.component.html',
  styleUrl: 'work-queue.component.scss',
})
export class WorkQueueComponent implements OnInit {
  @Input() workQueue: DashboardData['workQueue'] =
    {} as DashboardData['workQueue'];
  @Input() account: IAccount = {} as IAccount;
  items!: DashboardData['workQueue']['items'];
  activeTab: 'assigned' | 'review' | 'referrals' = 'assigned';

  ngOnInit() {
    this.items = this.workQueue.items;
  }

  checkName(name: string) {
    return name === this.account.fullName;
  }
}
