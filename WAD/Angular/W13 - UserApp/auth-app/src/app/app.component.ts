import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule here
import { CommonModule } from '@angular/common'; // This module is for Angular common utilities
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // Marking this component as standalone

  imports: [RouterOutlet,CommonModule,FormsModule, RouterModule  // <-- Add FormsModule here
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'auth-app';
}
