import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IAccount } from './interfaces/app.interfaces';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'diceus-front';
  tasks: number[] = [];
  account: IAccount = {} as IAccount;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/mock/data.json').subscribe(data => {
      this.tasks = data.menu.tasks;
      this.account = data.menu.accounts;
    });
  }
}
