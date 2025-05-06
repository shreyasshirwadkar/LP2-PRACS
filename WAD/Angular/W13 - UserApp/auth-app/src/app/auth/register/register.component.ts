import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  standalone: true, // Marks the component as standalone
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user={
    name:"",
    email:"",
    password:""
  };
  constructor(private authService: AuthService, private router:Router){}

  register(){
    this.authService.register(this.user);
    this.router.navigate(['/login']);
  }
  
}
