import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,  // Marks this component as standalone
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';  // To hold email input
  password: string = '';  // To hold password input
  errorMessage: string = '';  // To hold error message for failed login
  constructor(private authService: AuthService, private router: Router) {}
  login() {
    // Check if the login is successful
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/profile']);  // Navigate to profile if login is successful
    } else {
      this.errorMessage = 'Invalid credentials. Please try again.';  // Show error message
    }
  }
}
