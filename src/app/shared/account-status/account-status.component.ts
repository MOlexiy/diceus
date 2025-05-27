import { Component, Input } from '@angular/core';
import { IAccounts } from '../../interfaces/app.interfaces';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-account-status',
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: 'account-status.component.html',
  styleUrl: 'account-status.component.scss'
})
export class AccountStatusComponent {
  @Input() accountStatus: IAccounts['accountStatus'] =
    {} as IAccounts['accountStatus'];
}
