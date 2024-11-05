import { RegisterComponent } from './../register/register.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component ,OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink ,CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  username: string = '';
  password: string = '';
  showLoginError: boolean = false;
  loginErrorMessage: string = '';
  isExpanded: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  toggleExpand(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.isExpanded = !this.isExpanded;
  }


  

  signIn(event: Event) {
    event.preventDefault();
    if (this.username && this.password) {
      console.log('Signing in with:', this.username, this.password);
      this.router.navigate(['/DashboardComponent']);
    } else {
      this.showLoginError = true;
      this.loginErrorMessage = 'Please enter both username and password.';
    }
  }

  register(event: Event) {
    event.preventDefault();
    this.router.navigate(['/RegisterComponent']);
  }

}
