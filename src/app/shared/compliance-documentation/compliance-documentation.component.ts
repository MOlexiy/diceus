import { Component, Input } from '@angular/core';
import { IAccounts } from '../../interfaces/app.interfaces';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-compliance-documentation',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: 'compliance-documentation.component.html',
  styleUrl: 'compliance-documentation.component.scss',
})
export class ComplianceDocumentationComponent {
  @Input() complianceAndDocumentation: IAccounts['complianceAndDocumentation'] =
    {} as IAccounts['complianceAndDocumentation'];
}
