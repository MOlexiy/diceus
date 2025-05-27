import { Component, Input } from '@angular/core';
import { IAccounts } from '../../interfaces/app.interfaces';
import { CurrencyPipe, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-policies-block',
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf,
    NgSwitchCase,
    NgSwitch,
    NgSwitchDefault
  ],
  templateUrl: 'policies-block.component.html',
  styleUrl: 'policies-block.component.scss'
})
export class PoliciesBlockComponent {
  @Input() policies: IAccounts['policies'] =
    {} as IAccounts['policies'];
}
