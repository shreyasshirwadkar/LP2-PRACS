---

## ✅ **W13 Problem Statement**

**Create an Angular application which allows:**

- User Registration
- User Login
- Show User Data on Profile Page

---

### 🧩 Step 1: Create the Angular App (Standalone)

```bash
npm install -g @angular/cli
ng new auth-app --standalone
cd auth-app

```

Choose: **No routing** (we’ll add manually), **CSS** (or your choice).

---

### 💿 Step 2: Add Bootstrap

In `angular.json`, under `"styles"`, add:

```json
"node_modules/bootstrap/dist/css/bootstrap.min.css"
```

Or use CDN in `index.html`:

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
```

---

### 🛣️ Step 3: Set up Routing

**Create `app.routes.ts`:**

```
import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
];

```

Update `main.ts`:

```
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});

```

---

### 🧠 Step 4: Create the Service

To create a service in Angular, use the following CLI command:

```bash
ng generate service services/auth
```

This will create:

- `src/app/services/auth.service.ts`

**src/app/services/auth.service.ts**

```
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private user: any = null;

  register(userData: any) {
    this.user = userData;
  }

  login(email: string, password: string): boolean {
    return this.user && this.user.email === email && this.user.password === password;
  }

  getUser() {
    return this.user;
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }
}

```

---

### 📥 Step 5: Create Register Component

```bash
ng generate component auth/register --standalone --flat --skip-tests

```

**register.component.ts** (already working)

Make sure to import: `FormsModule`, `CommonModule`.

**register.component.html**

```html
<div class="container">
  <h2>User Registration</h2>
  <form (ngSubmit)="register()">
    <div class="form-group">
      <label>Name</label>
      <input
        type="text"
        class="form-control"
        [(ngModel)]="user.name"
        name="name"
        required
      />
    </div>
    <div class="form-group">
      <label>Email</label>
      <input
        type="email"
        class="form-control"
        [(ngModel)]="user.email"
        name="email"
        required
      />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input
        type="password"
        class="form-control"
        [(ngModel)]="user.password"
        name="password"
        required
      />
    </div>
    <button type="submit" class="btn btn-primary">Register</button>
  </form>
</div>
```

---

### 🔐 Step 6: Create Login Component

```bash
ng generate component auth/login --standalone --flat --skip-tests

```

**login.component.ts**

```
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/profile']);
    } else {
      this.error = 'Invalid credentials!';
    }
  }
}

```

**login.component.html**

```html
<div class="container">
  <h2>Login</h2>
  <form (ngSubmit)="login()">
    <div class="form-group">
      <label>Email</label>
      <input
        type="email"
        class="form-control"
        [(ngModel)]="email"
        name="email"
        required
      />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input
        type="password"
        class="form-control"
        [(ngModel)]="password"
        name="password"
        required
      />
    </div>
    <div *ngIf="error" class="text-danger mt-2">{{ error }}</div>
    <button type="submit" class="btn btn-primary mt-2">Login</button>
  </form>
</div>
```

---

### 👤 Step 7: Create Profile Component

```bash
ng generate component profile --standalone --flat --skip-tests

```

**profile.component.ts**

```
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  imports: [CommonModule]
})
export class ProfileComponent {
  user: any;

  constructor(private authService: AuthService) {
    this.user = this.authService.getUser();
  }
}

```

**profile.component.html**

```html
<div class="container">
  <h2>Profile</h2>
  <div *ngIf="user">
    <p><strong>Name:</strong> {{ user.name }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
  </div>
  <div *ngIf="!user">
    <p>You are not logged in. Please log in.</p>
  </div>
</div>
```

---

### 🧭 Step 8: Create Navbar in `app.component.ts`

**app.component.ts**

```
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'auth-app';
}

```

**app.component.html**

```html
<nav class="navbar navbar-dark bg-dark p-3">
  <a routerLink="/register" class="text-white me-3">Register</a>
  <a routerLink="/login" class="text-white me-3">Login</a>
  <a routerLink="/profile" class="text-white">Profile</a>
</nav>

<div class="container mt-4">
  <router-outlet></router-outlet>
</div>
```

---

## ✅ Final Note (for PR exam)

- You **don’t need a backend** — everything is stored in memory.
- Remember: **Do not refresh the page** — user data will be lost.
- Be confident using `ng generate component`, `ng serve`, and routing.

---

Would you like me to generate a 1-page PDF _cheat sheet_ for this project that you can refer to during your exam?
