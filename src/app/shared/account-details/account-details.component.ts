import { Component, Input } from '@angular/core';
import { IAccounts } from '../../interfaces/app.interfaces';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-account-details',
  imports: [NgForOf, NgIf, NgClass],
  templateUrl: 'account-details.component.html',
  styleUrl: 'account-details.component.scss',
})
export class AccountDetailsComponent {
  activeTab: string = 'Winnability';
  @Input() accountDetails: IAccounts['accountDetails'] =
    {} as IAccounts['accountDetails'];
  protected readonly Math = Math;

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
