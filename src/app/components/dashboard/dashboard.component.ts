import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stats {
  posts: number;
  destinations: number;
  countries: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userName = 'DEPI';
  currentLocation = 'Iceland';
  profileImage = 'images/img15.png';
  
  statsData: Stats = {
    posts: 4,
    destinations: 33,
    countries: 15
  };
}