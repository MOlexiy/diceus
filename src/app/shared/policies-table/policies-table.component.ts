import { Component, Input } from '@angular/core';
import { IAccounts } from '../../interfaces/app.interfaces';
import { CurrencyPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-policies-table',
  imports: [CurrencyPipe, NgForOf, NgIf],
  templateUrl: 'policies-table.component.html',
  styleUrl: 'policies-table.component.scss',
})
export class PoliciesTableComponent {
  @Input() policiesData: IAccounts['policies'] = {} as IAccounts['policies'];
}
