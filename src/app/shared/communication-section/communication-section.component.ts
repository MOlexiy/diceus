import { Component, Input, OnInit } from '@angular/core';
import { CommunicationItem, IAccounts } from '../../interfaces/app.interfaces';
import { FormsModule } from '@angular/forms';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-communication-section',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: 'communication-section.component.html',
  styleUrl: 'communication-section.component.scss'
})
export class CommunicationSectionComponent implements OnInit {
  searchCommunication = '';
  filteredMessages: CommunicationItem[] = [];
  isSearching = false;
  @Input() communication: IAccounts['communication'] =
    {} as IAccounts['communication'];

  ngOnInit() {
    this.filteredMessages = this.communication;
  }

  onSearch() {
    const term = this.searchCommunication.toLowerCase();
    this.filteredMessages = this.communication.filter(
      (msg) =>
        msg.title.toLowerCase().includes(term) ||
        msg.author.toLowerCase().includes(term) ||
        msg.message.toLowerCase().includes(term),
    );
    this.isSearching = true;
  }

  clearSearch() {
    this.searchCommunication = '';
    this.filteredMessages = this.communication;
    this.isSearching = false;
  }

  click(): void {
    console.log('clicked');
  }
}
