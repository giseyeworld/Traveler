


import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  // templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css' ,

  template : `


<nav class="main-nav">
    <button class="mobile-menu-btn" (click)="toggleMenu()">
        <i class="fas fa-bars"></i>
    </button>
    
    <ul class="nav-links" [class.show]="isMenuOpen">
       
    <li><a routerLink="home">Home</a></li>
    <li><a routerLink="about">About</a></li>
    <li><a routerLink="blog">Blog</a></li>
       
    <li ><a class="logo" href="#">Traveler</a></li>
    
     
    <li><a routerLink="dashboard">Dashboard</a></li>
    <li><a routerLink="contact">Contact</a></li>

    </ul>
   
    <div class="search-container">
        <input type="text" placeholder="Search">
        <button type="submit"><i class="fas fa-search"></i></button>
    </div>
</nav>
  
  `











})
export class NavbarComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
