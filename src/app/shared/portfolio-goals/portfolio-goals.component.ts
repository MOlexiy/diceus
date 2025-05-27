import { Component, Input } from '@angular/core';
import { DashboardData } from '../../interfaces/app.interfaces';

@Component({
  selector: 'app-portfolio-goals',
  imports: [],
  templateUrl: 'portfolio-goals.component.html',
  styleUrl: 'portfolio-goals.component.scss',
})
export class PortfolioGoalsComponent {
  @Input() portfolioGoals: DashboardData['portfolioGoals'] =
    {} as DashboardData['portfolioGoals'];
}
