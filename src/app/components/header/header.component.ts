
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `

    <section class="contact-section">
      <div class="contact-info">
        <i class="fa-solid fa-phone" (click)="callPhone()" [title]="'Call ' + phoneNumber"></i>
        <span> {{ phoneNumber }} </span>
        <i class="fa-solid fa-envelope" (click)="sendEmail()" [title]="'Email ' + email"></i>
        <span class="email"> {{ email }} </span>
      </div>
      <div class="social-icons">
        <i *ngFor="let social of socialLinks" 
           [class]="social.icon" 
           (click)="openSocialLink(social.url)"
           [title]="'Visit our ' + social.name + ' page'"></i>
      </div>
    </section>
    
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  phoneNumber = '+123 456 7890';
  email = 'Traveler@gmail.com';
  socialLinks = [
    { icon: 'fa-brands fa-facebook-f', url: 'https://www.facebook.com/', name: 'Facebook' },
    { icon: 'fa-brands fa-square-instagram', url: 'https://www.instagram.com/', name: 'Instagram' },
    { icon: 'fa-brands fa-square-x-twitter', url: 'https://twitter.com/', name: 'Twitter' }
  ];

  callPhone(): void {
    window.location.href = `tel:${this.phoneNumber}`;
    
  }

  sendEmail(): void {
    window.location.href = `mailto:${this.email}`;
    
  }

  openSocialLink(url: string): void {
    window.open(url, '_blank');
   
  }
}