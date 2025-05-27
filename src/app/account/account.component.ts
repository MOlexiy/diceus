import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { IAccounts, IData } from '../interfaces/app.interfaces';
import { FormsModule } from '@angular/forms';
import { PerformanceMetricsComponent } from '../shared/performance-metrics/performance-metrics.component';
import { PoliciesBlockComponent } from '../shared/policies-block/policies-block.component';
import { AccountStatusComponent } from '../shared/account-status/account-status.component';
import { ComplianceDocumentationComponent } from '../shared/compliance-documentation/compliance-documentation.component';
import { AccountDetailsComponent } from '../shared/account-details/account-details.component';
import { CommunicationSectionComponent } from '../shared/communication-section/communication-section.component';
import { PoliciesTableComponent } from '../shared/policies-table/policies-table.component';

@Component({
  selector: 'app-account',
  templateUrl: 'account.component.html',
  imports: [
    NgIf,
    FormsModule,
    PerformanceMetricsComponent,
    PoliciesBlockComponent,
    AccountStatusComponent,
    ComplianceDocumentationComponent,
    AccountDetailsComponent,
    CommunicationSectionComponent,
    PoliciesTableComponent,
  ],
  styleUrls: ['account.component.scss'],
})
export class AccountComponent implements OnInit {
  accountData: IAccounts = {} as IAccounts;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    try {
      this.http.get<IData>('assets/mock/data.json').subscribe((data) => {
        this.accountData = data.accounts;
      });
    } catch (error) {
      console.error(error);
    }
  }
}
