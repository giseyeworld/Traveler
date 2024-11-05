import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./components/header/header.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

import { FooterComponent } from "./components/footer/footer.component";
import { RouterLink } from '@angular/router'; 







@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink , RouterOutlet,  HeaderComponent , NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

 
})
export class AppComponent {
  title = 'Traveler';
}



